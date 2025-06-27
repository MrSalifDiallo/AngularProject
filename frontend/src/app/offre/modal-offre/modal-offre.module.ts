import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ModalOffreComponent } from './modal-offre.component';


@NgModule({
  declarations: [ModalOffreComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
      ModalOffreComponent
    ]
})

export class ModalOffreModule { }
