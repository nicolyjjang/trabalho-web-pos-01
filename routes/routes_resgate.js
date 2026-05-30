import { Router } from "express";
import {
  getAllResgatesController,
  getResgateController,
  createResgateController,
  updateResgateController,
  deleteResgateController,
} from "../controllers/controllers_resgate.js";

const router = Router();

router.get("/", getAllResgatesController);
router.get("/:id", getResgateController);
router.post("/", createResgateController);
router.patch("/:id", updateResgateController);
router.delete("/:id", deleteResgateController);

export { router as default };
