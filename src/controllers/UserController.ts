import { Request, Response } from "express";
import { userRepository } from "../infra/repositories";
import { BadRequestError, UnauthorizedError } from "../helpers/api-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CustomRequest } from "../middlewares/authMiddleware";

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const userExists = await userRepository.findOneBy({ email });

    if (userExists) {
      throw new BadRequestError("Email already exists.");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = userRepository.create({
      name,
      email,
      password: hashPassword,
    });
    await userRepository.save(newUser);
    const { password: _, ...user } = newUser;
    return res.status(201).json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await userRepository.findOneBy({ email });

    if (!user) {
      throw new BadRequestError("email or password invalid.");
    }

    const verifyPass = await bcrypt.compare(password, user.password);
    if (!verifyPass) {
      throw new BadRequestError("email or password invalid.");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", {
      expiresIn: "8h",
    });

    const { password: _, ...userNoPass } = user;
    return res.status(200).json({ user: userNoPass, token: token });
  }

  async getProfile(req: Request, res: Response) {
    const reqCustom = req as CustomRequest;
    return res.json(reqCustom.user);
  }
}
