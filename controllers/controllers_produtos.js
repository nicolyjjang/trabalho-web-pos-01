import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByDescription,    
  getProductByBarCode,
} from "../services/services_produtos.js";
import mongoose from "mongoose";

async function getAllProductsController(req, res) {
  try {
    const products = await getAllProducts();
    res.send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function getProductController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const product = await getProduct(id);
      res.send(product);
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getProductByDescriptionController(req, res) {
    try{
        const {descricao} = req.params;
        if(!descricao || descricao.trim() === ""){
            return res.status(422).send("A descrição é obrigatória");
        }
        const products = await getProductByDescription(descricao);
        res.send(products);
    }catch(error){
        res.status(500).send(error.message);
    };
}

async function getProductByBarCodeController(req, res) {
    try{
        const {codigo_barras} = req.params;
        if(!codigo_barras ||  codigo_barras.trim() === ""){
            return res.status(422).send("O código de barras é obrigatório");
        }
        const products = await getProductByBarCode(codigo_barras);
        res.send(products);
    }catch(error){
        res.status(500).send(error.message);
    }
}

async function createProductController(req, res) {
  try {
    const dados = req.body;
    if (req.body.nome) {
      const produto = await createProduct(dados);
      res.status(201).send(produto);
    } else {
      res.status(422).send('Campo "nome" é obrigatório');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateProductController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const body = req.body;
      const produto = await updateProduct(id, body);
      res.send(produto);
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteProductController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const produto = await deleteProduct(id);
      res.send({ message: "Produto excluído com sucesso", produto });
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export {
  getAllProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
  getProductByDescriptionController,
  getProductByBarCodeController,
};
