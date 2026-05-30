import {
  lerEntradas,
  pegarEntradaPorId,
  pegarEntradaPorNomeProduto,
  adicionarEntrada,
  atualizarEntrada,
  deletarEntrada,
} from "../services/services_entrada.js";
import mongoose from "mongoose";

async function obterEntradas(req, res) {
  try {
    const entradas = await lerEntradas();
    res.send(entradas);
  } catch (error) {
    res.status(500).send({ error: "Erro ao obter entradas" });
  }
}

async function obterEntradaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const entrada = await pegarEntradaPorId(id);
      if (entrada) {
        res.send(entrada);
      } else {
        res.status(404).send({ error: "Entrada não encontrada" });
      }
    } else {
      res.status(400).send({ error: "ID não encontrado" });
    }
  } catch (error) {
    res.status(500).send({ error: "Erro ao obter entrada" });
  }
}

async function obterEntradaPorNomeProduto(req, res) {
  try {
    const nomeProduto = req.params.nomeProduto;
    if (nomeProduto) {
      const entrada = await pegarEntradaPorNomeProduto(nomeProduto);
      if (entrada) {
        res.send(entrada);
      } else {
        res.status(404).send({ error: "Entrada não encontrada" });
      }
    } else {
      res.status(400).send({ error: "Nome do produto não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao obter a entrada por nome do produto:", error);
    res.status(500).send({ error: "Erro ao obter entrada por nome do produto" });
  }
}


async function criarNovaEntrada(req, res) {
  try {
    const novaEntrada = req.body;
    if (novaEntrada) {
      await adicionarEntrada(novaEntrada);
      res.status(201).send({ message: "Entrada criada com sucesso" });
    } else {
      res.status(400).send({ error: "Dados da entrada não encontrados" });
    }
  } catch (error) {
    res.status(500).send({ error: "Erro ao criar entrada" });
  }
}

async function atualizarEntradaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const entradaAtualizada = req.body;
      await atualizarEntrada(id, entradaAtualizada);
      res.send({ message: "Entrada atualizada com sucesso" });
    } else {
      res.status(400).send({ error: "ID não encontrado" });
    }
  } catch (error) {
    res.status(500).send({ error: "Erro ao atualizar entrada" });
  }
}

async function deletarEntradaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      await deletarEntrada(id);
      res.send({ message: "Entrada deletada com sucesso" });
    } else {
      res.status(400).send({ error: "ID não encontrado" });
    }
  } catch (error) {
    res.status(500).send({ error: "Erro ao deletar entrada" });
  }
}

export {
  obterEntradas,
  obterEntradaPorId,
  obterEntradaPorNomeProduto,
  criarNovaEntrada,
  atualizarEntradaPorId,
  deletarEntradaPorId,
};
