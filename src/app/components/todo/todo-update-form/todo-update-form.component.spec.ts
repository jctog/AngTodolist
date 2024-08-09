import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUpdateFormComponent } from './todo-update-form.component';

describe('TodoUpdateFormComponent', () => {
  let component: TodoUpdateFormComponent;
  let fixture: ComponentFixture<TodoUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
