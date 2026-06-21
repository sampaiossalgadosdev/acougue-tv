const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function initDB() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS empresas (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        cnpj VARCHAR(14) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        senha_hash VARCHAR(255) NOT NULL,
        tv_token VARCHAR(255) UNIQUE,
        criado_em TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS carnes (
        id SERIAL PRIMARY KEY,
        empresa_id INTEGER NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
        nome VARCHAR(255) NOT NULL,
        tipo VARCHAR(100),
        preco_kg NUMERIC(10,2) NOT NULL,
        imagem_url VARCHAR(500) NOT NULL,
        destaque BOOLEAN DEFAULT FALSE,
        preco_desconto NUMERIC(10,2),
        percentual_desconto INTEGER,
        criado_em TIMESTAMP DEFAULT NOW(),
        atualizado_em TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log('✅ Banco de dados inicializado com sucesso');
  } finally {
    client.release();
  }
}

module.exports = { pool, initDB };
