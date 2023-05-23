import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description?: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  findById(id: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<Category>;
  save(category: Category): Promise<Category>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
