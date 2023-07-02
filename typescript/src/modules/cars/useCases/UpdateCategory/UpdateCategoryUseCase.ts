import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  id: string;
  name: string;
  description?: string;
}

@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ id, name, description }: IRequest): Promise<Category> {
    const findCategory = await this.categoriesRepository.findById(id);

    if (!findCategory) {
      throw new AppError("Category not found.", 404);
    }

    Object.assign(findCategory, { name, description });

    await this.categoriesRepository.save(findCategory);

    return findCategory;
  }
}

export { UpdateCategoryUseCase };
