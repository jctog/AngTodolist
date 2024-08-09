import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../../components/todo/todo/todo.component';
import { TodoFormComponent } from '../../components/todo/todo-form/todo-form.component';
import { TodolistComponent } from '../../components/todo/todolist/todolist.component';



@NgModule({
  declarations: [TodoComponent, TodoFormComponent, TodolistComponent],
  imports: [
    CommonModule
  ],
  exports: [TodoComponent, TodoFormComponent, TodolistComponent]
})
export class TodoModule { }
