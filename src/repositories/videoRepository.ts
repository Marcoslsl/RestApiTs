import { AppDataSource } from "../infra/data-source";
import { Video } from "../infra/entities/Video";

export const videoRepository = AppDataSource.getRepository(Video);
