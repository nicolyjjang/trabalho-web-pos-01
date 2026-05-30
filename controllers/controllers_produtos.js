import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/services_produtos.js";
import mongoose from "mongoose";

async function getAllProductsController(req, res) {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getProductController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const product = await getProduct(id);
      res.json(product);
    } else {
      res.status(422).json("ID inválido");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function createProductController(req, res) {
  try {
    const dados = req.body;
    if (req.body.nome) {
      const produto = await createProduct(dados);
      res.status(201).json(produto);
    } else {
      res.status(422).json('Campo "nome" é obrigatório');
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function updateProductController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const body = req.body;
      const produto = await updateProduct(id, body);
      res.json(produto);
    } else {
      res.status(422).json("ID inválido");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function deleteProductController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const produto = await deleteProduct(id);
      res.json({ message: "Produto excluído com sucesso", produto });
    } else {
      res.status(422).json("ID inválido");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export {
  getAllProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
};
