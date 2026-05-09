const { Router } = require('express');
const router = Router();
const {
    getAllResgatesController,
    getResgateController,
    createResgateController,
    updateResgateController,
    deleteResgateController
} = require('../controllers/controllers_resgates');

router.get('/', getAllResgatesController);
router.get('/:id', getResgateController);
router.post('/', createResgateController);
router.patch('/:id', updateResgateController);
router.delete('/:id', deleteResgateController);

module.exports = router;