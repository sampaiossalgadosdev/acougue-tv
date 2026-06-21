const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { pool } = require('../db');

function validarCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]/g, '');
  if (cnpj.length !== 14) return false;
  if (/^(\d)\1+$/.test(cnpj)) return false;

  let soma = 0;
  let peso = 5;
  for (let i = 0; i < 12; i++) {
    soma += parseInt(cnpj[i]) * peso--;
    if (peso < 2) peso = 9;
  }
  let d1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (parseInt(cnpj[12]) !== d1) return false;

  soma = 0;
  peso = 6;
  for (let i = 0; i < 13; i++) {
    soma += parseInt(cnpj[i]) * peso--;
    if (peso < 2) peso = 9;
  }
  let d2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  return parseInt(cnpj[13]) === d2;
}

// POST /api/auth/empresa/cadastro
router.post('/empresa/cadastro', async (req, res) => {
  const { nome, cnpj, email, senha } = req.body;

  if (!nome || !cnpj || !email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  const cnpjLimpo = cnpj.replace(/[^\d]/g, '');
  if (!validarCNPJ(cnpjLimpo)) {
    return res.status(400).json({ error: 'CNPJ inválido' });
  }

  if (senha.length < 6) {
    return res.status(400).json({ error: 'A senha deve ter pelo menos 6 caracteres' });
  }

  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    const tvToken = uuidv4();

    const result = await pool.query(
      `INSERT INTO empresas (nome, cnpj, email, senha_hash, tv_token)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, nome, email, tv_token`,
      [nome, cnpjLimpo, email.toLowerCase().trim(), senhaHash, tvToken]
    );

    res.status(201).json({
      message: 'Empresa cadastrada com sucesso',
      empresa: result.rows[0]
    });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ error: 'CNPJ ou e-mail já cadastrado no sistema' });
    }
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// POST /api/auth/empresa/login
router.post('/empresa/login', async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: 'E-mail e senha são obrigatórios' });
  }

  try {
    const result = await pool.query(
      'SELECT * FROM empresas WHERE email = $1',
      [email.toLowerCase().trim()]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos' });
    }

    const empresa = result.rows[0];
    const senhaValida = await bcrypt.compare(senha, empresa.senha_hash);

    if (!senhaValida) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos' });
    }

    const token = jwt.sign(
      { id: empresa.id, nome: empresa.nome, email: empresa.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      empresa: {
        id: empresa.id,
        nome: empresa.nome,
        email: empresa.email,
        tv_token: empresa.tv_token
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// POST /api/auth/tv/login — valida o token da TV
router.post('/tv/login', async (req, res) => {
  const { tv_token } = req.body;

  if (!tv_token) {
    return res.status(400).json({ error: 'Token da TV é obrigatório' });
  }

  try {
    const result = await pool.query(
      'SELECT id, nome FROM empresas WHERE tv_token = $1',
      [tv_token.trim()]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Token da TV inválido' });
    }

    res.json({
      message: 'Token válido',
      empresa_id: result.rows[0].id,
      empresa_nome: result.rows[0].nome
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
