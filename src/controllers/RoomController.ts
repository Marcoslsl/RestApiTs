import { Request, Response } from "express";
import {
  roomRepository,
  videoRepository,
  subejctRepository,
} from "../infra/repositories";
import { BadRequestError, NotFoundError } from "../helpers/api-errors";

export class RoomController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body;
    try {
      const newRoom = roomRepository.create({ name, description });
      await roomRepository.save(newRoom);
      console.log(newRoom);
      res.status(201).json(newRoom);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" });
    }
  }

  async createVideo(req: Request, res: Response) {
    const { title, url } = req.body;
    const { idRoom } = req.params;

    const room = await roomRepository.findOneBy({ id: Number(idRoom) });
    if (!room) {
      throw new BadRequestError("Room not found");
    } else {
      const newVideo = videoRepository.create({
        title: title,
        url: url,
        room: room,
      });
      await videoRepository.save(newVideo);
      res.status(201).json(newVideo);
    }
  }

  async roomSubject(req: Request, res: Response) {
    const { subjectId } = req.body;
    const { idRoom } = req.params;

    const room = await roomRepository.findOneBy({ id: Number(idRoom) });
    const subject = await subejctRepository.findOneBy({
      id: Number(subjectId),
    });

    if (!room || !subject) {
      throw new NotFoundError("Room or Subject not found");
    } else {
      const roomUpdate = {
        ...room,
        subjects: [subject],
      };
      await roomRepository.save(roomUpdate);
      res.status(204).send();
    }
  }
  async list(req: Request, res: Response) {
    const rooms = await roomRepository.find({
      relations: {
        subjects: true,
        videos: true,
      },
    });
    res.json(rooms);
  }
}
