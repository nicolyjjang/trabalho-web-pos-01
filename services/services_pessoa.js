import fs from "fs";

const caminhoArquivo = "./assets/pessoa.json";

async function getTodosPessoas(req, res) {
  const result = await JSON.parse(fs.readFileSync(caminhoArquivo));
  return result;
}

async function getPessoaPorId(id) {
  const pessoas = await getTodosPessoas();
  const pessoa = pessoas.find((pessoa) => pessoa.id == id);
  if (!pessoa) {
    throw new Error("Pessoa não encontrada");
  }
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

  if (indiceModificado === -1) {
    throw new Error("Pessoa não encontrada para modificação");
  }

  const conteudoMudado = {
    ...pessoasAtuais[indiceModificado],
    ...modificacoes,
  };
  pessoasAtuais[indiceModificado] = conteudoMudado;

  fs.writeFileSync(caminhoArquivo, JSON.stringify(pessoasAtuais));
}

async function deletarPessoa(id) {
  let pessoasAtuais = await getTodosPessoas();
  const novaListaDePessoas = pessoasAtuais.filter((pessoa) => pessoa.id != id);

  if (pessoasAtuais.length === novaListaDePessoas.length) {
    throw new Error("Pessoa não encontrada para exclusão");
  }

  fs.writeFileSync(caminhoArquivo, JSON.stringify(novaListaDePessoas));
}

export {
  getTodosPessoas,
  getPessoaPorId,
  inserePessoa,
  modificaPessoa,
  deletarPessoa,
};
