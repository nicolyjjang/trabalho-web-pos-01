import {
  getTodasCampanhas,
  getCampanhaPorId,
  insereCampanha,
  modificaCampanha,
  deletarCampanhaPorId,
} from "../services/services_campanha.js";
import mongoose from "mongoose";

async function getCampanhas(req, res) {
  try {
    const campanhas = await getTodasCampanhas();
    res.status(200).json(campanhas);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function getCampanha(req, res) {
  //get:id
  try {
    const id = req.params.id;

    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const campanhas = await getCampanhaPorId(id);
      res.status(200).json(campanhas);
    } else {
      res.status(422).json({ error: "id invalido"});
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function getCampanhaPorDescricaoController(req, res) {
  try {
    const descricao = req.params.descricao;
    if (!descricao) {
      return res.status(422).json({ error: "Nome inválido" });
    }

    const campanhas = await getCampanhaPorDescricao(descricao);
    res.status(200).json(campanhas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function postCampanha(req, res) {
  try {
    const campanhaNovo = req.body;

    if (campanhaNovo.nome) {
      const campanha = await insereCampanha(campanhaNovo);
      res.status(201).json({
        message:"campanha criada com sucesso",
        campanha,
      });
    } else {
      res.status(422).json({error: "campo nome de Campanha é obrigadorio"});
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function patchCampanha(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const campanha = await modificaCampanha(id, body);
      res.status(200).json({
        message:" Campanha modificada com sucesso",
        campanha,
      });
    } else {
      res.status(422).json({error: "id invalido"});
    }
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
}

async function deleteCampanha(req, res) {
  try {
    const id = req.params.id;

    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const campanha = await deletarCampanhaPorId(id);
      res.status(200).json({message: "Campanha deletado com sucesso", campanha});
    } else {
      res.status(422).json({error: "id invalido"});
    }
  } catch (error) {
    res.status(500).json({ error:error.message});
  }
}

export {
  getCampanhas,
  getCampanha,
  getCampanhaPorDescricaoController,
  postCampanha,
  patchCampanha,
  deleteCampanha,
};
