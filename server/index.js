const express = require('express');
const path = require('path');
require('dotenv').config();

const { initDB } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Rotas da API
app.use('/api/auth', require('./routes/auth'));
app.use('/api/empresas', require('./routes/empresas'));
app.use('/api/carnes', require('./routes/carnes'));

// Rota raiz — redireciona para o cadastro de empresa
app.get('/', (req, res) => {
  res.redirect('/empresas/cadastro.html');
});

// Tratamento de erros global
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.message && err.message.includes('Apenas imagens')) {
    return res.status(400).json({ error: err.message });
  }
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ error: 'A imagem não pode ultrapassar 5MB' });
  }
  res.status(500).json({ error: 'Erro interno do servidor' });
});

async function start() {
  try {
    await initDB();
    app.listen(PORT, () => {
      console.log(`🚀 AçougueTV rodando em http://localhost:${PORT}`);
      console.log(`   Admin:  http://localhost:${PORT}/admin/login.html`);
      console.log(`   TV:     http://localhost:${PORT}/tv/index.html`);
    });
  } catch (err) {
    console.error('❌ Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
}

start();
