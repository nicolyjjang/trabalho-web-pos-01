const { Router } = require("express");
const {
  getPessoas,
  getPessoa,
  postPessoa,
  patchPessoa,
  deletePessoa,
} = require("../controllers/controller_pessoa");
const router = Router();

router.get("/", getPessoas);

router.get("/:id", getPessoa);

router.post("/", postPessoa);

router.patch("/:id", patchPessoa);

router.delete("/:id", deletePessoa);

module.exports = router;
