import { Component } from '@angular/core';
import { TodoService } from '../../../services/todo-service/todo.service';
import { Todo } from '../../../todo';
import { Router } from '@angular/router';
import { compileNgModule } from '@angular/compiler';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  todos: Todo[] = [];
  keyWord: string = '';
  stats = {
    total: 0,
    traited: 0,
    unTraited: 0,
  };

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTodos();
    console.log('Todolist: ', this.todos);
  }

  getAllTodos(): void {
    this.todos = this.todoService.getTodoList();
    this.stats.total = this.todos.length;
    this.statistics();
  }

  getTraitedTodos(): void {
    this.todos = this.todoService.getTodoList().filter((el) => el.status);
    this.statistics();
  }

  getUnTraitedTodos(): void {
    this.todos = this.todoService.getTodoList().filter((el) => !el.status);
    this.statistics();
  }

  search() {
    console.log('search', this.keyWord);
    const keyWord = this.keyWord || '';
    this.todos = this.todoService
      .getTodoList()
      .filter(
        (el) => el.title.includes(keyWord) || el.description.includes(keyWord)
      );
    this.statistics();
  }

  statistics() {
    const todos = this.todoService.getTodoList();
    let traited = 0;
    let unTraited = 0;
    todos.map((el) => {
      if (el.status) {
        traited++;
      } else {
        unTraited++;
      }
    });
    this.stats.total = todos.length;
    this.stats.traited = traited;
    this.stats.unTraited = unTraited;

    return this.stats;
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    // console.log('delete id', id);
    this.getAllTodos();
  }
}
