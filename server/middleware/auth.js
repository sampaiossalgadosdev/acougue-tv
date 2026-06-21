const jwt = require('jsonwebtoken');
const { pool } = require('../db');

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.empresa = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido ou expirado' });
  }
}

async function tvAuthMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }
  const token = authHeader.split(' ')[1];

  // Tenta JWT primeiro
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.empresa = decoded;
    return next();
  } catch {
    // Não é JWT, tenta tv_token
  }

  // Tenta tv_token direto
  try {
    const result = await pool.query(
      'SELECT id, nome FROM empresas WHERE tv_token = $1',
      [token]
    );
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Token da TV inválido' });
    }
    req.empresa = { id: result.rows[0].id, nome: result.rows[0].nome };
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

module.exports = { authMiddleware, tvAuthMiddleware };
