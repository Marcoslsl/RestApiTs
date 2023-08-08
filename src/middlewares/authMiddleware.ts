import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../helpers/api-errors";
import { userRepository } from "../infra/repositories";
import jwt from "jsonwebtoken";
import { User } from "../infra/entities";

type JwtPayload = {
  userId: number;
};

export interface CustomRequest extends Request {
  user: Partial<User>;
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new UnauthorizedError("User not logged.");
  }

  const token = authorization.split(" ")[1];
  console.log(token);

  const { userId } = jwt.verify(
    token,
    process.env.JWT_PASS ?? ""
  ) as JwtPayload;

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new UnauthorizedError("Unauthorized user.");
  }

  const { password: _, ...UserNoPass } = user;

  (req as CustomRequest).user = UserNoPass;

  next();
};
