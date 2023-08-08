import { SubjectController } from "../controllers";
import { Router } from "express";

const router = Router()

router.post("/subject", new SubjectController().create);
export {router}