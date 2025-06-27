import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionStudentComponent } from './action-student.component';

describe('ActionStudentComponent', () => {
  let component: ActionStudentComponent;
  let fixture: ComponentFixture<ActionStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
