import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/CreateCategory/CreateCategoryController";
import importCategoryController from "../modules/cars/useCases/ImportCategory";
import { ListCategoriesController } from "../modules/cars/useCases/ListCategories/ListCategoriesController";
import { SearchCategoryController } from "../modules/cars/useCases/SearchCategory/SearchCategoryController";
import { UpdateCategoryController } from "../modules/cars/useCases/UpdateCategory/UpdateCategoryController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const searchCategoryController = new SearchCategoryController();
const updateCategoryUseCase = new UpdateCategoryController();

const upload = multer({ dest: "./temp/" });

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.get("/category", searchCategoryController.handle);

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.put("/category/:id", updateCategoryUseCase.handle);

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController().handle(request, response);
});

export { categoriesRoutes };
