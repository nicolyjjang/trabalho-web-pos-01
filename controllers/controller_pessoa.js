const {
  getTodosPessoas,
  getPessoaPorId,
  inserePessoa,
  modificaPessoa,
  deletarPessoa,
} = require("../services/services_pessoa");

async function getPessoas(req, res) {
  try {
    const dados = await getTodosPessoas();
    res.send(dados);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getPessoa(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const dados = await getPessoaPorId(id);
      res.send(dados);
    } else {
      res.status(422).send("Erro na inserção no ID");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function postPessoa(req, res) {
  try {
    const dados = req.body;
    if (dados.nome) {
      await inserePessoa(dados);
      res.send(dados);
    } else {
      res.status(422).send("O nome da pessoa é obrigatório");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function patchPessoa(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const dados = await getPessoaPorId(id);
      res.send(dados);
    } else {
      res.status(422).send("Erro na inserção no ID");
    }
    const modificacoes = req.body;
    await modificaPessoa(modificacoes, id);
    res.status(200).send("Pessoa modificada com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deletePessoa(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      await deletarPessoa(id);
      res.status(200).send("Pessoa excluída com sucesso");
    } else {
      res.status(422).send("Erro na exclusão do ID");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getPessoas,
  getPessoa,
  postPessoa,
  patchPessoa,
  deletePessoa,
};
