// server/routes.js
const express = require('express');
const Produto = require('../models/Produto');
const Pedido = require('../models/Pedido');

const router = express.Router();

router.get('/produtos', async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
});

router.post('/pedido', async (req, res) => {
  const novoPedido = new Pedido({ itens: req.body.itens });
  await novoPedido.save();
  res.json({ sucesso: true });
});

module.exports = router;
