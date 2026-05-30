import { json } from "express";
import {
  getTodasCampanhas,
  getCampanhaPorId,
  insereCampanha,
  modificaCampanha,
  deletarCampanhaPorId,
} from "../services/campanha.js";
import mongoose from "mongoose";

async function getCampanhas(req, res) {
  try {
    const campanhas = await getTodasCampanhas();
    res.send(campanhas);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function getCampanha(req, res) {
  //get:id
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const campanhas = await getCampanhaPorId(id);
      res.send(campanhas);
    } else {
      res.status(422).json("id invalido");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function postCampanha(req, res) {
  try {
    const campanhaNovo = req.body;

    if (req.body.nome) {
      const campanha = await insereCampanha(campanhaNovo);
      res.status(201).json(campanha);
    } else {
      res.status(422).json("campo nome obrigadorio");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function patchCampanha(req, res) {
  try {
    const id = req.params.id;

    if (id && mongoose.Types.ObjectId.isCalid(id)) {
      const body = req.body;
      const campanha = await modificaCampanha(body, id);
      res.json(json);
    } else {
      res.status(422).json("id invalido");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function deleteCampanha(req, res) {
  try {
    const id = req.params.id;

    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const campanha = await deletarCampanhaPorId(id);
      res.json({message: "Campanha deletado com sucesso", campanha});
    } else {
      res.status(422).json("id invalido");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export {
  getCampanhas,
  getCampanha,
  postCampanha,
  patchCampanha,
  deleteCampanha,
};
