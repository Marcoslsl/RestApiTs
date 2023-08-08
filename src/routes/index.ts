import { Router } from "express";
import { router as roomRouter } from "./roomRouter";
import { router as subjectRouter } from "./subjectRouter";
import { router as userRouter } from "./userRouter";

const router = Router();
router.use(userRouter);
router.use(roomRouter);
router.use(subjectRouter);

export { router };
