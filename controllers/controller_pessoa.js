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
    res.status(200).send(dados);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function getPessoa(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const dados = await getPessoaPorId(id);
      res.status(200).send(dados);
    } else {
      res.status(422).send({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function postPessoa(req, res) {
  try {
    const dados = req.body;
    if (dados.nome) {
      await inserePessoa(dados);
      res.status(201).send({
        message: "Pessoa criada com sucesso",
        pessoa: dados,
      });
    } else {
      res.status(422).send("O nome da pessoa é obrigatório");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function patchPessoa(req, res) {
  try {
    const id = req.params.id;
    const modificacoes = req.body;

    if (id && Number(id)) {
      await modificaPessoa(modificacoes, id);
      res.status(200).send({ message: "Pessoa modificada com sucesso" });
    } else {
      res.status(422).send({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function deletePessoa(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      await deletarPessoa(id);
      res.status(200).send({ message: "Pessoa excluída com sucesso" });
    } else {
      res.status(422).send({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  getPessoas,
  getPessoa,
  postPessoa,
  patchPessoa,
  deletePessoa,
};
