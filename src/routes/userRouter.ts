import { Router } from "express";
import { UserController } from "../controllers";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();
router.post("/user", new UserController().create);
router.post("/login", new UserController().login);
router.get("/profile", authMiddleware, new UserController().getProfile);
export { router };
