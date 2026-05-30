import { Router } from "express";
import {
  obterVendas,
  obterVendaPorId,
  criarNovaVenda,
  atualizarVendaPorId,
  deletarVendaPorId,
} from "../controllers/controller_venda.js";

const router = Router();

router.get("/", obterVendas);
router.get("/:id", obterVendaPorId);
router.post("/", criarNovaVenda);
router.patch("/:id", atualizarVendaPorId);
router.delete("/:id", deletarVendaPorId);

export { router as default };
