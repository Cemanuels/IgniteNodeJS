import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(file: Express.Multer.File): void {
    return console.log(file);
  }
}

export { ImportCategoryUseCase };
