import { SubjectController } from "../controllers";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.use(authMiddleware);
router.post("/subject", new SubjectController().create);
export { router };
