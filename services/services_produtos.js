const fs = require('fs');
const caminhoArquivo = './assets/produtos.json';

async function getAllProducts() {
    return JSON.parse(await fs.promises.readFile(caminhoArquivo, 'utf-8'));
}

async function getProduct(id){
    const products = await getAllProducts();
    const product = products.find(product => product.id === (Number(id)));
    return product;
}

async function createProduct(dados){
    const products = await getAllProducts();
    const newProduct = [...products, dados];
    fs.writeFileSync(caminhoArquivo, JSON.stringify(newProduct));
    return newProduct;
}

async function updateProduct(id, modificacoes){
    const products = await getAllProducts();
    const productIndex = products.findIndex(product => product.id === (Number(id)));
    const updatedProduct = {...products[productIndex], ...modificacoes};
    products[productIndex] = updatedProduct;
    fs.writeFileSync(caminhoArquivo, JSON.stringify(products));
    return updatedProduct;
}

async function deleteProduct(id){
    const products = await getAllProducts();
    const deletedProduct = products.findIndex(product => product.id === (Number(id)));
    if (deletedProduct === -1) {
        throw new Error('Produto não encontrado');
    }
    products.splice(deletedProduct, 1);
    fs.writeFileSync(caminhoArquivo, JSON.stringify(products,null,2));
    return products;
}

module.exports = {
    getAllProducts,
    getProduct, 
    createProduct,
    updateProduct,
    deleteProduct
};