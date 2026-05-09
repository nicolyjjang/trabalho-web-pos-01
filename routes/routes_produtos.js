const {Router} = require('express');
const router = Router();
const{
    getAllProductsController,
    getProductController, 
    createProductController,
    updateProductController,
    deleteProductController
} = require('../controllers/controllers_produtos');

router.get("/", getAllProductsController);
router.get("/:id", getProductController);
router.post("/", createProductController);
router.patch("/:id", updateProductController);
router.delete("/:id", deleteProductController);

module.exports = router;
