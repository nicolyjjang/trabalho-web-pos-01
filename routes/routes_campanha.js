import { Router } from "express";
import {
  getCampanhas,
  getCampanha,
  getCampanhaPorDescricaoController,
  postCampanha,
  patchCampanha,
  deleteCampanha,
} from "../controllers/controller_campanha";

const router = Router();

router.get("/", getCampanhas);
router.get("/descricao/:descricao", getCampanhaPorDescricaoController);
router.get("/:id", getCampanha);
router.post("/", postCampanha);
router.patch("/:id", patchCampanha);
router.delete("/:id", deleteCampanha);

export { router as default };
