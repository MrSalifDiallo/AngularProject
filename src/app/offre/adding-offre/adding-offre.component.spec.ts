import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingOffreComponent } from './adding-offre.component';

describe('AddingOffreComponent', () => {
  let component: AddingOffreComponent;
  let fixture: ComponentFixture<AddingOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddingOffreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddingOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
