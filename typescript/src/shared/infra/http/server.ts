import "reflect-metadata";
import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "@shared/infra/typeorm";
import "@shared/container";

import { routes } from "@shared/infra/http/routes";
import { errorHandler } from "@shared/middlewares/errorHandler";

import swaggerFile from "../../../swagger.json";

const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use(errorHandler);

app.listen(3333, () => {
  console.log("Servidor iniciado com sucesso na porta 3333! 🚀");
});
