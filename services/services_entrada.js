import { Entrada } from "../Models/Entrada.js";

async function lerEntradas() {
  const entradas = await Entrada.find();
  return entradas;
}

async function pegarEntradaPorId(id) {
  const entrada = await Entrada.findById(id);
  if (!entrada) {
    throw new Error("Entrada não encontrada.");
  }
  return entrada;
}

async function pegarEntradaPorNomeProduto(nomeProduto) {
  const entrada = await Entrada.findOne({ nome_produto: nomeProduto });
  if (!entrada) {
    throw new Error("Entrada não encontrada.");
  }
  return entrada;
}

async function adicionarEntrada(novaEntrada) {
  const entradas = new Entrada(novaEntrada);
  const entradaSalva = await entradas.save();
  return entradaSalva;
}

async function atualizarEntrada(id, entradaAtualizada) {
  const entrada = await Entrada.findByIdAndUpdate(id, entradaAtualizada, {
    new: true,
    runValidators: true,
  });
  if (!entradaAtualizada) {
    throw new Error("Entrada não encontrada.");
  }
  return entradaAtualizada;
}

async function deletarEntrada(id) {
  const entrada = await Entrada.findByIdAndDelete(id);
  if (!entrada) {
    throw new Error("Entrada não encontrada.");
  }
}

export {
  lerEntradas,
  pegarEntradaPorId,
  adicionarEntrada,
  atualizarEntrada,
  deletarEntrada,
};
