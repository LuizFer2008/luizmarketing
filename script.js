// public/script.js
let carrinho = [];

async function carregarProdutos() {
  const res = await fetch('/api/produtos');
  const produtos = await res.json();
  const container = document.getElementById('produtos');
  container.innerHTML = '';
  produtos.forEach(prod => {
    const div = document.createElement('div');
    div.className = 'produto';
    div.innerHTML = `
      <h3>${prod.nome}</h3>
      <p>R$ ${prod.preco}</p>
      <button onclick='adicionar(${JSON.stringify(prod)})'>Adicionar</button>
    `;
    container.appendChild(div);
  });
}

function adicionar(produto) {
  carrinho.push(produto);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('carrinho');
  lista.innerHTML = '';
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$${item.preco}`;
    lista.appendChild(li);
  });
}

function finalizarCompra() {
  fetch('/api/pedido', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ itens: carrinho })
  }).then(res => res.json())
    .then(data => {
      alert('Pedido realizado com sucesso!');
      carrinho = [];
      atualizarCarrinho();
    });
}

carregarProdutos();
