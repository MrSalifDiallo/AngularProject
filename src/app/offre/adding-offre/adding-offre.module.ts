import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddingOffreComponent } from './adding-offre.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AddingOffreComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    AddingOffreComponent
  ]
})
export class AddingOffreModule { } 