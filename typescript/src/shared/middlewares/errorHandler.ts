import { NextFunction, Request, Response } from "express";

import { AppError } from "@shared/errors/AppError";

export function errorHandler(
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
): Response {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${error.message}`,
  });
}
