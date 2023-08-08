import { Router } from "express";
import { router as roomRouter } from "./roomRouter";
import { router as subjectRouter } from "./subjectRouter";

const router = Router();
router.use(roomRouter);
router.use(subjectRouter);

export { router };
