const fs = require("fs");

const caminhoArquivo = "./assets/pessoa.json";

async function getTodosPessoas(req, res) {
  const result = await JSON.parse(fs.readFileSync(caminhoArquivo));
  return result;
}

async function getPessoaPorId(id) {
  const pessoas = await getTodosPessoas();
  const pessoa = pessoas.find((pessoa) => pessoa.id == id);
  return pessoa;
}

async function inserePessoa(dados) {
  const pessoas = await getTodosPessoas();
  const novaListaDePessoas = [...pessoas, dados];
  fs.writeFileSync(caminhoArquivo, JSON.stringify(novaListaDePessoas));
}

async function modificaPessoa(modificacoes, id) {
  let pessoasAtuais = await getTodosPessoas();
  const indiceModificado = pessoasAtuais.findIndex((pessoa) => pessoa.id == id);

  const conteudoMudado = { ...pessoasAtuais[indiceModificado], ...modificacoes };
  pessoasAtuais[indiceModificado] = conteudoMudado;

  fs.writeFileSync(caminhoArquivo, JSON.stringify(pessoasAtuais));
}

async function deletarPessoa(id) {
  let pessoasAtuais = await getTodosPessoas();
  const novaListaDePessoas = pessoasAtuais.filter((pessoa) => pessoa.id != id);
  fs.writeFileSync(caminhoArquivo, JSON.stringify(novaListaDePessoas));
}

module.exports = {
  getTodosPessoas,
  getPessoaPorId,
  inserePessoa,
  modificaPessoa,
  deletarPessoa,
};
