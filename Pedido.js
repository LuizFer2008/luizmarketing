// models/Pedido.js
const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  itens: Array,
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pedido', PedidoSchema);
