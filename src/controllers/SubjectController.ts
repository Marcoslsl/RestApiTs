import { Request, Response } from "express";
import { subejctRepository } from "../repositories/subjectRepository";

export class SubjectController {
  async create(req: Request, res: Response) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "name is needed" });
    }
    try {
      const newSubject = subejctRepository.create({
        name: name,
      });
      await subejctRepository.save(newSubject);
      console.log(newSubject);
      res.status(201).json(newSubject);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" });
    }
  }
}
