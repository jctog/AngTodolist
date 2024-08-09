import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../../services/todo-service/todo.service';
import { Todo } from '../../../todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(private todoService: TodoService, private router: Router) {}

  addTask() {
    const todo: Todo = {
      id: Date.now(),
      title: this.todoForm.value.title || '',
      description: this.todoForm.value.description || '',
      status: false,
    };
    console.log(this.todoForm.value);
    if (todo.title.trim() !== '' && todo.description.trim() !== '') {
      this.todoService.addTodo(todo);
      this.router.navigate(['todo']);
    }
  }
}
