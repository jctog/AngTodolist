import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodolistComponent } from './components/todo/todolist/todolist.component';
import { TodoFormComponent } from './components/todo/todo-form/todo-form.component';
import { TodoUpdateFormComponent } from './components/todo/todo-update-form/todo-update-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'todo',
    component: TodoComponent,
    children: [
      { path: '', component: TodolistComponent },
      { path: 'todoform', component: TodoFormComponent },
      { path: 'updateform/:id', component: TodoUpdateFormComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
