import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class SearchCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(category: string): Promise<Category> {
    const findCategory = await this.categoriesRepository.findByName(category);

    if (!findCategory) {
      throw new AppError("Category not found.", 404);
    }

    return findCategory;
  }
}

export { SearchCategoryUseCase };
