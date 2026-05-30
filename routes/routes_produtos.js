import { Router } from 'express';
import {
    getAllProductsController,
    getProductController, 
    createProductController,
    updateProductController,
    deleteProductController
} from '../controllers/controllers_produtos.js';

const router = Router();

router.get("/", getAllProductsController);
router.get("/:id", getProductController);
router.post("/", createProductController);
router.patch("/:id", updateProductController);
router.delete("/:id", deleteProductController);

export default router;
