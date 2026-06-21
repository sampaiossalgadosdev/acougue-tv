const express = require('express');
const router = express.Router();
const multer = require('multer');
const sharp = require('sharp');
const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { pool } = require('../db');
const { authMiddleware, tvAuthMiddleware } = require('../middleware/auth');

const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

async function uploadR2(buffer, filename) {
  await r2.send(new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: filename,
    Body: buffer,
    ContentType: 'image/jpeg',
  }));
  return `${process.env.R2_PUBLIC_URL}/${filename}`;
}

async function deleteR2(url) {
  if (!url) return;
  const base = process.env.R2_PUBLIC_URL;
  if (!base || !url.startsWith(base)) return;
  const key = url.slice(base.length + 1);
  try {
    await r2.send(new DeleteObjectCommand({ Bucket: process.env.R2_BUCKET_NAME, Key: key }));
  } catch {}
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    if (allowed.includes(file.mimetype)) return cb(null, true);
    cb(new Error('Apenas imagens JPEG, PNG ou WebP são aceitas'));
  }
});

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
    return res.status(400).json({ error: 'Nome e preço são obrigatórios' });
  }

  if (!req.file) {
    return res.status(400).json({ error: 'A imagem do produto é obrigatória' });
  }

  const isDestaque = destaque === 'true';
  if (isDestaque && (!preco_desconto || !percentual_desconto)) {
    return res.status(400).json({ error: 'Para produto em destaque, informe o preço com desconto e o percentual' });
  }

  let imagemUrl = null;
  try {
    const filename = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.jpg`;
    const buffer = await sharp(req.file.buffer)
      .resize(960, 540, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 85 })
      .toBuffer();
    imagemUrl = await uploadR2(buffer, filename);

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
    await deleteR2(imagemUrl);
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// PUT /api/carnes/:id — editar carne
router.put('/:id', authMiddleware, upload.single('imagem'), async (req, res) => {
  const { id } = req.params;
  const { nome, tipo, preco_kg, destaque, preco_desconto, percentual_desconto } = req.body;
  let novaImagemUrl = null;

  try {
    const existing = await pool.query(
      'SELECT * FROM carnes WHERE id = $1 AND empresa_id = $2',
      [id, req.empresa.id]
    );

    if (existing.rows.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    const atual = existing.rows[0];
    const isDestaque = destaque === 'true';
    let imagemUrl = atual.imagem_url;

    if (req.file) {
      const filename = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.jpg`;
      const buffer = await sharp(req.file.buffer)
        .resize(960, 540, { fit: 'cover', position: 'centre' })
        .jpeg({ quality: 85 })
        .toBuffer();
      novaImagemUrl = await uploadR2(buffer, filename);
      await deleteR2(atual.imagem_url);
      imagemUrl = novaImagemUrl;
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
    await deleteR2(novaImagemUrl);
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
    await deleteR2(existing.rows[0].imagem_url);
    await pool.query('DELETE FROM carnes WHERE id = $1 AND empresa_id = $2', [id, req.empresa.id]);
    res.json({ message: 'Produto removido com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
