const fs = require("fs");
const arquivoEntradas = "./assets/entrada.json";

async function lerEntradas() {
  const entradas = await fs.promises.readFile(arquivoEntradas, "utf-8");
  return JSON.parse(entradas);
}

async function pegarEntradaPorId(id) {
  const entradasPorId = await lerEntradas();
  return entradasPorId.find((entrada) => entrada.id === Number(id));
}

async function adicionarEntrada(novaEntrada) {
  const entradas = await lerEntradas();
  const entradaAdicionada = [...entradas, novaEntrada];
  await fs.promises.writeFile(
    arquivoEntradas,
    JSON.stringify(entradaAdicionada, null, 2),
  );
}

async function atualizarEntrada(id, entradaAtualizada) {
  let entradas = await lerEntradas();
  const indiceAtualizado = entradas.findIndex(
    (entrada) => entrada.id === Number(id),
  );
  entradas[indiceAtualizado] = entradaAtualizada;
  await fs.promises.writeFile(
    arquivoEntradas,
    JSON.stringify(entradas, null, 2),
  );
}

async function deletarEntrada(id) {
  let entradas = await lerEntradas();
  const indiceDeletado = entradas.filter(
    (entrada) => entrada.id !== Number(id),
  );
  await fs.promises.writeFile(
    arquivoEntradas,
    JSON.stringify(indiceDeletado, null, 2),
  );
}

module.exports = {
  lerEntradas,
  pegarEntradaPorId,
  adicionarEntrada,
  atualizarEntrada,
  deletarEntrada,
};
