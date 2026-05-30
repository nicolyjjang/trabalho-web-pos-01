import { Router } from "express";
import {
  getCampanhas,
  getCampanha,
  postCampanha,
  patchCampanha,
  deleteCampanha,
} from "../controllers/campanha.js";

const router = Router();

router.get("/", getCampanhas);
router.get("/:id", getCampanha);
router.post("/", postCampanha);
router.patch("/:id", patchCampanha);
router.delete("/:id", deleteCampanha);

export { router as default };
