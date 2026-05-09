const {
    getAllProducts,
    getProduct, 
    createProduct,
    updateProduct,
    deleteProduct
} = require('../services/services_produtos');

async function getAllProductsController(req, res) {
    try{
        const products = await getAllProducts();
        res.json(products);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

async function getProductController(req, res) {
    try{
        const id = req.params.id;
        if(id && Number(id)){
            const product = await getProduct(id);
            res.json(product);
        }else{
            res.status(422).json('ID inválido');
        }
    }catch(error){
        res.status(500).json(error.message);
    }
}

async function createProductController(req, res) {
    try{
        const dados = req.body;
        if(req.body.nome){
            await createProduct(dados);
            res.status(201).json("Produto criado com sucesso");
        }else{
            res.status(422).json('Campo "nome" é obrigatório');
        }
    }catch(error){
        res.status(500).json(error.message);
    }
};

async function updateProductController(req, res) {
    try{
        const id = req.params.id;
        if(id && Number(id)){
            const body = req.body;
            await updateProduct(id, body);
            res.json("Produto atualizado com sucesso");
        }else{
            res.status(422).json('ID inválido');
        }
    }catch(error){
        res.status(500).json(error.message);
    }
};

async function deleteProductController(req, res) {
    try{
        const id = req.params.id;
        if(id && Number(id)){
            await deleteProduct(id);
            res.json("Produto excluído com sucesso");
        }else{
            res.status(422).json('ID inválido');
        }
    }catch(error){
        res.status(500).json(error.message);
    }
};

module.exports = {
    getAllProductsController,
    getProductController,
    createProductController,
    updateProductController,
    deleteProductController
};