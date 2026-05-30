import { Router } from "express";
import {
  getPessoas,
  getPessoa,
  postPessoa,
  patchPessoa,
  deletePessoa,
} from "../controllers/controller_pessoa.js";

const router = Router();

router.get("/", getPessoas);
router.get("/:id", getPessoa);
router.post("/", postPessoa);
router.patch("/:id", patchPessoa);
router.delete("/:id", deletePessoa);

export { router as default };
