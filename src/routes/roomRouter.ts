import { Router } from "express";
import { RoomController } from "../controllers";

const router = Router();
router.post("/room", new RoomController().create);
router.get("/rooms", new RoomController().list);
router.post("/room/:idRoom/create", new RoomController().createVideo);
router.post("/room/:idRoom/subject", new RoomController().roomSubject);
export { router };
