import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  private counter = 0;

  create(createTodoDto: CreateTodoDto) {
    this.todos.push({ ...createTodoDto, id: this.counter++ });
    return this.todos[this.todos.length - 1];
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos[id] || null;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    if (!this.todos[id]) {
      return null;
    }
    this.todos[id] = { ...this.todos[id], ...updateTodoDto };
    return this.todos[id];
  }

  remove(id: number) {
    this.todos = this.todos.filter((user) => user.id != id);
    return this.todos;
  }
}
