const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { pool } = require('../db');
const { authMiddleware, tvAuthMiddleware } = require('../middleware/auth');

const uploadsDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}-${Math.random().toString(36).substr(2, 9)}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    if (allowed.includes(file.mimetype)) return cb(null, true);
    cb(new Error('Apenas imagens JPEG, PNG ou WebP são aceitas'));
  }
});

function deletarArquivo(url) {
  if (!url) return;
  const filePath = path.join(__dirname, '../../', url);
  if (fs.existsSync(filePath)) {
    try { fs.unlinkSync(filePath); } catch {}
  }
}

// GET /api/carnes/tv — tela da TV (autenticada por tv_token)
router.get('/tv', tvAuthMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM carnes WHERE empresa_id = $1 ORDER BY nome ASC',
      [req.empresa.id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// GET /api/carnes — painel admin
router.get('/', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM carnes WHERE empresa_id = $1 ORDER BY nome ASC',
      [req.empresa.id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// GET /api/carnes/:id — dados de uma carne
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM carnes WHERE id = $1 AND empresa_id = $2',
      [req.params.id, req.empresa.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// POST /api/carnes — cadastrar nova carne
router.post('/', authMiddleware, upload.single('imagem'), async (req, res) => {
  const { nome, tipo, preco_kg, destaque, preco_desconto, percentual_desconto } = req.body;

  if (!nome || !preco_kg) {
    if (req.file) deletarArquivo(`/uploads/${req.file.filename}`);
    return res.status(400).json({ error: 'Nome e preço são obrigatórios' });
  }

  if (!req.file) {
    return res.status(400).json({ error: 'A imagem do produto é obrigatória' });
  }

  const isDestaque = destaque === 'true';
  if (isDestaque && (!preco_desconto || !percentual_desconto)) {
    deletarArquivo(`/uploads/${req.file.filename}`);
    return res.status(400).json({ error: 'Para produto em destaque, informe o preço com desconto e o percentual' });
  }

  const imagemUrl = `/uploads/${req.file.filename}`;

  try {
    const result = await pool.query(
      `INSERT INTO carnes (empresa_id, nome, tipo, preco_kg, imagem_url, destaque, preco_desconto, percentual_desconto)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [
        req.empresa.id,
        nome.trim(),
        tipo ? tipo.trim() : null,
        parseFloat(preco_kg),
        imagemUrl,
        isDestaque,
        isDestaque ? parseFloat(preco_desconto) : null,
        isDestaque ? parseInt(percentual_desconto) : null
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    deletarArquivo(imagemUrl);
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// PUT /api/carnes/:id — editar carne
router.put('/:id', authMiddleware, upload.single('imagem'), async (req, res) => {
  const { id } = req.params;
  const { nome, tipo, preco_kg, destaque, preco_desconto, percentual_desconto } = req.body;

  try {
    const existing = await pool.query(
      'SELECT * FROM carnes WHERE id = $1 AND empresa_id = $2',
      [id, req.empresa.id]
    );

    if (existing.rows.length === 0) {
      if (req.file) deletarArquivo(`/uploads/${req.file.filename}`);
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    const atual = existing.rows[0];
    const isDestaque = destaque === 'true';
    let imagemUrl = atual.imagem_url;

    if (req.file) {
      deletarArquivo(atual.imagem_url);
      imagemUrl = `/uploads/${req.file.filename}`;
    }

    const result = await pool.query(
      `UPDATE carnes SET
        nome = $1, tipo = $2, preco_kg = $3, imagem_url = $4,
        destaque = $5, preco_desconto = $6, percentual_desconto = $7,
        atualizado_em = NOW()
       WHERE id = $8 AND empresa_id = $9 RETURNING *`,
      [
        nome ? nome.trim() : atual.nome,
        tipo !== undefined ? (tipo ? tipo.trim() : null) : atual.tipo,
        preco_kg ? parseFloat(preco_kg) : atual.preco_kg,
        imagemUrl,
        isDestaque,
        isDestaque && preco_desconto ? parseFloat(preco_desconto) : null,
        isDestaque && percentual_desconto ? parseInt(percentual_desconto) : null,
        id,
        req.empresa.id
      ]
    );

    res.json(result.rows[0]);
  } catch (err) {
    if (req.file) deletarArquivo(`/uploads/${req.file.filename}`);
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// DELETE /api/carnes/:id
router.delete('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const existing = await pool.query(
      'SELECT * FROM carnes WHERE id = $1 AND empresa_id = $2',
      [id, req.empresa.id]
    );
    if (existing.rows.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    deletarArquivo(existing.rows[0].imagem_url);
    await pool.query('DELETE FROM carnes WHERE id = $1 AND empresa_id = $2', [id, req.empresa.id]);
    res.json({ message: 'Produto removido com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
