import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 0, name: 'Paresh' },
    { id: 1, name: 'Rakesh' },
  ];

  findAll(name?: string) {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }
  findById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(CreateUserDTO): User {
    this.users.push({ ...CreateUserDTO, id: this.users.length });
    return this.users[this.users.length - 1];
  }
}
