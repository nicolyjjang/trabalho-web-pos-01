const { Router} = require("express")
const { getCampanhas, getCampanha, postCampanha, patchCampanha, deleteCampanha} = require("../controllers/campanha")

const router = Router();

router.get('/', getCampanhas);
router.get('/:id', getCampanha)
router.post('/', postCampanha);
router.patch('/:id',patchCampanha);
router.delete('/:id', deleteCampanha);

module.exports = router;