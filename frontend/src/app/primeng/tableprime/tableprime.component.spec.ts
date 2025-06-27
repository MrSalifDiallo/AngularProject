import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableprimeComponent } from './tableprime.component';

describe('TableprimeComponent', () => {
  let component: TableprimeComponent;
  let fixture: ComponentFixture<TableprimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableprimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
