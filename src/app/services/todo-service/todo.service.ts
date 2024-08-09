import { Injectable } from '@angular/core';
import { Todo } from '../../todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: Todo[] = [
    {
      id: 1,
      title: 'Manger',
      description: 'dfqsfdf',
      status: false,
    },
    {
      id: 2,
      title: 'Danser',
      description: 'dfqsfdf',
      status: false,
    },
    {
      id: 3,
      title: 'Dormir',
      description: 'dfqsfdf',
      status: false,
    },
  ];
  constructor() {}

  getTodoList(): Todo[] {
    return this.todoList;
  }

  addTodo(todo: Todo): void {
    this.todoList.push(todo);
  }

  deleteTodo(id: number): void {
    this.todoList = this.todoList.filter((element) => element.id !== id);
    // console.log('Service deleteTodo', this.todoList);
  }

  updateTodo(id: number, title: string, description: string) {
    this.todoList = this.todoList.map((el) => {
     return el.id === id ? { ...el, title, description } : el;
    });
    console.log('update TodoService', id, title, description);
  }

  getOneTask(id: number): Todo {
    const todo = this.todoList.filter((el) => el.id === id);
    return todo[0];
  }
}
