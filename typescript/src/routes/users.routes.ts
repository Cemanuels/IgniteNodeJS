import { Router } from "express";
import { ensureAuthenticated } from "middlewares/ensureAuthenticated";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/account/useCases/CreateUser/CreateUserController";
import { ListUsersController } from "@modules/account/useCases/ListUsers/ListUsersController";
import { UpdateUserAvatarController } from "@modules/account/useCases/UpdateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./temp/avatar"));

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.get("/", listUsersController.handle);

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { usersRoutes };
