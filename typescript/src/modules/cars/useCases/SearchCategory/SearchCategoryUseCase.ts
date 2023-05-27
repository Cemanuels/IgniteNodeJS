import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { Category } from "@modules/cars/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

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
