import { Router } from "express";
import { UserController } from "../controllers";

const router = Router();
router.post("/user", new UserController().create);
export { router };
