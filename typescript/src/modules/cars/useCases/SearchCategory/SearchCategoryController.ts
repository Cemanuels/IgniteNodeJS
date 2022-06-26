import { Request, Response } from "express";
import { container } from "tsyringe";

import { SearchCategoryUseCase } from "./SearchCategoryUseCase";

class SearchCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const searchCategoryUseCase = await container.resolve(
      SearchCategoryUseCase
    );

    const category = await searchCategoryUseCase.execute(name);

    return response.status(200).json(category);
  }
}

export { SearchCategoryController };
