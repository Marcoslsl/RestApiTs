import { AppDataSource } from "../infra/data-source";
import { Room } from "../infra/entities/Room";

export const roomRepository = AppDataSource.getRepository(Room);
