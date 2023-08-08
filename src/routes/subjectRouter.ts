import { SubjectController } from "../controllers";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/subject", authMiddleware, new SubjectController().create);
export { router };
