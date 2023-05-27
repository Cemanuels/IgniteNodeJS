import { inject, injectable } from "tsyringe";

import { User } from "@modules/account/entities/User";
import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListUsersUseCase };
