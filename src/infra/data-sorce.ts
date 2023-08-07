import { DataSource } from "typeorm";
import "dotenv/config";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as number | undefined,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  //entities: [Post, Category],
  subscribers: [],
  migrations: [],
});
