import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(_request: Request, response: Response): Promise<Response> {
    const list = await this.listCategoriesUseCase.execute();

    if (!list) {
      return response.status(400).json([]);
    }

    return response.status(200).json(list);
  }
}

export { ListCategoriesController };
