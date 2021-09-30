import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    try {
      const list = await listCategoriesUseCase.execute();

      return response.status(200).json(list);
    } catch (error) {
      return response.status(200).json({ message: error.message });
    }
  }
}

export { ListCategoriesController };
