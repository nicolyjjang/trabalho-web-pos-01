const { Router } = require("express");
const {
  obterEntradas,
  obterEntradaPorId,
  criarNovaEntrada,
  atualizarEntradaPorId,
  deletarEntradaPorId,
} = require("../controllers/controller_entrada");

const router = Router();

router.get("/", obterEntradas);
router.get("/:id", obterEntradaPorId);
router.post("/", criarNovaEntrada);
router.patch("/:id", atualizarEntradaPorId);
router.delete("/:id", deletarEntradaPorId);

module.exports = router;
