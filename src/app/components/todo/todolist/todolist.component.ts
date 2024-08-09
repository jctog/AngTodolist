import { Component } from '@angular/core';
import { TodoService } from '../../../services/todo-service/todo.service';
import { Todo } from '../../../todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.getTodos();
    console.log('Todolist: ', this.todos);
  }

  getTodos(): void {
    this.todos = this.todoService.getTodoList();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    console.log('delete id', id);
    this.getTodos();
  }


}
