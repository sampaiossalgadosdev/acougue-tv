const express = require('express');
const router = express.Router();
const { pool } = require('../db');
const { authMiddleware } = require('../middleware/auth');

// GET /api/empresas/me
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, nome, cnpj, email, tv_token, criado_em FROM empresas WHERE id = $1',
      [req.empresa.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Empresa não encontrada' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
