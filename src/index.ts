import "express-async-errors";
import express from "express";
import { AppDataSource } from "./infra/data-source";
import { router } from "./routes";
import { errorMiddleware } from "./middlewares/error";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());
  app.use(router);

  app.use(errorMiddleware);
  return app.listen(process.env.PORT, () =>
    console.log(`Running App on port ${process.env.PORT}`)
  );
});
