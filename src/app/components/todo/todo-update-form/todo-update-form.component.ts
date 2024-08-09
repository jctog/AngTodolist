import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../../services/todo-service/todo.service';
import { Todo } from '../../../todo';

@Component({
  selector: 'app-todo-update-form',
  templateUrl: './todo-update-form.component.html',
  styleUrl: './todo-update-form.component.css',
})
export class TodoUpdateFormComponent {
  id!: number;
  task!: Todo;

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private todoService: TodoService
  ) {}
  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = parseInt(params['id']);
      this.task = this.todoService.getOneTask(this.id);
      this.todoForm.setValue({
        title: this.task.title,
        description: this.task.description,
      });
    });
  }

  updateTodo() {
    const title: string = this.todoForm.value.title || '';
    const description: string = this.todoForm.value.description || '';
    if (title.trim() !== '' && description.trim() !== '') {
      this.todoService.updateTodo(this.id, title, description);
      this.route.navigate(['todo']);
    }
  }
}
