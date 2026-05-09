const { Router } = require("express");
const {
  obterVendas,
  obterVendaPorId,
  criarNovaVenda,
  atualizarVendaPorId,
  deletarVendaPorId,
} = require("../controllers/controller_venda");

const router = Router();

router.get("/", obterVendas);
router.get("/:id", obterVendaPorId);
router.post("/", criarNovaVenda);
router.put("/:id", atualizarVendaPorId);
router.delete("/:id", deletarVendaPorId);

module.exports = router;
