// server/app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');
const path = require('path');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
  app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
}).catch(err => console.error('Erro ao conectar ao MongoDB:', err));
