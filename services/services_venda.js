const fs = require("fs");
const arquivoVendas = "./assets/venda.json";

async function lerVendas() {
  const vendas = await fs.promises.readFile(arquivoVendas, "utf-8");
  console.log(vendas);
  return JSON.parse(vendas);
}

async function pegarVendaPorId(id) {
  const vendasPorId = await lerVendas();
  console.log(vendasPorId);
  return vendasPorId.find((venda) => venda.id === Number(id));
}

async function adicionarVenda(novaVenda) {
  const vendas = await lerVendas();
  const vendaAdicionada = [...vendas, novaVenda];
  console.log(vendaAdicionada);
  await fs.promises.writeFile(
    arquivoVendas,
    JSON.stringify(vendaAdicionada, null, 2),
  );
}

async function atualizarVenda(id, vendaAtualizada) {
  let vendas = await lerVendas();
  const indiceAtualizado = vendas.findIndex((venda) => venda.id === Number(id));
  vendas[indiceAtualizado] = vendaAtualizada;
  console.log(vendas);
  await fs.promises.writeFile(arquivoVendas, JSON.stringify(vendas, null, 2));
}

async function deletarVenda(id) {
  let vendas = await lerVendas();
  const indiceDeletado = vendas.filter((venda) => venda.id !== Number(id));
  console.log(indiceDeletado);
  await fs.promises.writeFile(
    arquivoVendas,
    JSON.stringify(indiceDeletado, null, 2),
  );
}

module.exports = {
  lerVendas,
  pegarVendaPorId,
  adicionarVenda,
  atualizarVenda,
  deletarVenda,
};
