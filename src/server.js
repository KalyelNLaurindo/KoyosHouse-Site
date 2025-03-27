const express = require('express');
const path = require('path');

const app = express();
const DEFAULT_PORT = 3000;

// Serve arquivos estáticos (HTML, CSS, JS do front)
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// Rota de teste da API
app.get('/api/status', (req, res) => {
  res.status(200).json({ message: 'API online com sucesso!' });
});

// Rota fallback para SPA (Single Page App)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Tenta iniciar servidor
const tryListen = (port) => {
  const server = app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ Porta ${port} em uso. Tentando ${port + 1}...`);
      tryListen(port + 1);
    } else {
      console.error('Erro inesperado:', err);
    }
  });
};

tryListen(DEFAULT_PORT);
