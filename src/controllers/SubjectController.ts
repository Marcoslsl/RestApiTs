import { Request, Response } from "express";
import { subejctRepository } from "../infra/repositories";
import { BadRequestError } from "../helpers/api-errors";

export class SubjectController {
  async create(req: Request, res: Response) {
    const { name } = req.body;
    if (!name) {
      throw new BadRequestError("Name is required.");
    }
    const newSubject = subejctRepository.create({
      name: name,
    });
    await subejctRepository.save(newSubject);
    res.status(201).json(newSubject);
  }
}
