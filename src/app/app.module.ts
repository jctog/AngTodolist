import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todo/todolist/todolist.component';
import { TodoFormComponent } from './components/todo/todo-form/todo-form.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoUpdateFormComponent } from './components/todo/todo-update-form/todo-update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ContactComponent,
    TodoComponent,
    TodoFormComponent,
    TodolistComponent,
    TodoUpdateFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
