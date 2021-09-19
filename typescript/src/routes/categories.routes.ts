import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/CreateCategory";
import importCategoryController from "../modules/cars/useCases/ImportCategory";
import listCategoriesController from "../modules/cars/useCases/ListCategories";

const categoriesRoutes = Router();

const upload = multer({ dest: "./temp/" });

categoriesRoutes.get("/", (_request, response) => {
  return listCategoriesController().handle(_request, response);
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController().handle(request, response);
});

export { categoriesRoutes };
