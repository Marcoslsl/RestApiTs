import { AppDataSource } from "../data-source";
import { Subject } from "../entities/Subject";

export const subejctRepository = AppDataSource.getRepository(Subject);
