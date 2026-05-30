import { Pessoa } from "../Models/Pessoa.js";

async function getAllPessoas() {
  const pessoas = await Pessoa.find();
  return pessoas;
}

async function getPessoaPorId(id) {
  const pessoa = await Pessoa.findById(id);
  if (!pessoa) {
    throw new Error("Pessoa não encontrada");
  }
  return pessoa;
}

async function inserePessoa(dados) {
  const novaPessoa = new Pessoa(dados);
  const savedPessoa = await novaPessoa.save();
  return savedPessoa;
}

async function modificaPessoa(id, modificacoes) {
  const pessoaAtualizada = await Pessoa.findByIdAndUpdate(id, modificacoes, {
    new: true,
    runValidators: true,
  });
  if (!pessoaAtualizada) {
    throw new Error("Pessoa não encontrada para modificação");
  }
  return pessoaAtualizada;
}

async function deletarPessoa(id) {
  const pessoaDeletada = await Pessoa.findByIdAndDelete(id);
  if (!pessoaDeletada) {
    throw new Error("Pessoa não encontrada para exclusão");
  }
  return pessoaDeletada;
}

export {
  getAllPessoas,
  getPessoaPorId,
  inserePessoa,
  modificaPessoa,
  deletarPessoa,
};
