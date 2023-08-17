import { DataSource } from "typeorm";
import "dotenv/config";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "mysql",
  host:
    process.env.NODE_ENV === "development"
      ? process.env.DB_HOST_DOCKER
      : process.env.DB_HOST,
  port: process.env.DB_PORT as number | undefined,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  subscribers: [],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});
