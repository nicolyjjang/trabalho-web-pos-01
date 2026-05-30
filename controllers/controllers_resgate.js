import {
  getAllResgates,
  getResgate,
  createResgate,
  updateResgate,
  deleteResgate,
} from "../services/services.resgate.js";
import mongoose from "mongoose";

async function getAllResgatesController(req, res) {
  try {
    const resgates = await getAllResgates();
    res.send(resgates);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function getResgateController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const resgate = await getResgate(id);
      if (!resgate) {
        return res.status(404).send("Resgate não encontrado");
      }
      res.send(resgate);
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createResgateController(req, res) {
  try {
    const dados = req.body;
    if (req.body.id_cliente && req.body.itens_resgatados) {
      await createResgate(dados);
      res.status(201).send("Resgate criado com sucesso");
    } else {
      res
        .status(422)
        .send('Campos "id_cliente" e "itens_resgatados" são obrigatórios');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateResgateController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const body = req.body;
      await updateResgate(id, body);
      res.send("Resgate atualizado com sucesso");
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteResgateController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      await deleteResgate(id);
      res.send("Resgate excluído com sucesso");
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export {
  getAllResgatesController,
  getResgateController,
  createResgateController,
  updateResgateController,
  deleteResgateController,
};
