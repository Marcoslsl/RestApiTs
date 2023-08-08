import { AppDataSource } from "../data-source";
import { Subject } from "../entities";

export const subejctRepository = AppDataSource.getRepository(Subject);
