import { AppDataSource } from "../infra/data-source";
import { Subject } from "../infra/entities/Subject";

export const subejctRepository = AppDataSource.getRepository(Subject);
