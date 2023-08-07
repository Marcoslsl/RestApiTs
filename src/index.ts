import express from "express";
import { AppDataSource } from "./infra/data-sorce";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    return res.json("tudo certo");
  });

  return app.listen(process.env.PORT, () =>
    console.log(`Running App on port ${process.env.PORT}`)
  );
});
