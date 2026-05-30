import {
  getAllPessoas,
  getPessoaPorId,
  inserePessoa,
  modificaPessoa,
  deletarPessoa,
} from "../services/services_pessoa.js";
import mongoose from "mongoose";

async function getPessoas(req, res) {
  try {
    const dados = await getAllPessoas();
    res.status(200).json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getPessoa(req, res) {
  try {
    const id = req.params.id;

    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const dados = await getPessoaPorId(id);
      res.status(200).json(dados);
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function postPessoa(req, res) {
  try {
    const dados = req.body;
    if (dados.nome) {
      const pessoa = await inserePessoa(dados);
      res.status(201).json({
        message: "Pessoa criada com sucesso",
        pessoa,
      });
    } else {
      res.status(422).json({ error: "O nome da pessoa é obrigatório" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function patchPessoa(req, res) {
  try {
    const id = req.params.id;
    const modificacoes = req.body;

    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const pessoa = await modificaPessoa(id, modificacoes);
      res.status(200).json({
        message: "Pessoa modificada com sucesso",
        pessoa,
      });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletePessoa(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const pessoa = await deletarPessoa(id);
      res.status(200).json({
        message: "Pessoa excluída com sucesso",
        pessoa,
      });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { getPessoas, getPessoa, postPessoa, patchPessoa, deletePessoa };
