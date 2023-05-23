import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }

  async list(): Promise<Category[]> {
    const all = this.categories;

    return all;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);

    return category;
  }

  async findById(id: string): Promise<Category> {
    const category = this.categories.find((category) => category.id === id);

    return category;
  }

  async save(category: Category): Promise<Category> {
    const categoryExistsIdx = this.categories.findIndex(
      (cat) => cat.id === category.id
    );

    if (categoryExistsIdx !== -1) {
      this.categories[categoryExistsIdx] = category;
    } else {
      this.categories.push(category);
    }

    return category;
  }
}

export { CategoriesRepositoryInMemory };
