import { Router } from 'express';
import {
    getAllProductsController,
    getProductController, 
    createProductController,
    updateProductController,
    deleteProductController, 
    getProductByDescriptionController,
    getProductByBarCodeController
} from '../controllers/controllers_produtos.js';

const router = Router();

router.get("/", getAllProductsController);

router.get("/descricao/:descricao", getProductByDescriptionController);
router.get("/barcode/:codigo_barras", getProductByBarCodeController);
router.get("/:id", getProductController);
router.post("/", createProductController);
router.patch("/:id", updateProductController);
router.delete("/:id", deleteProductController);

export default router;
