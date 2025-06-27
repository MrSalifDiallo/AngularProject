import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableprimeComponent } from './tableprime.component';



@NgModule({
  declarations: [TableprimeComponent],
  imports: [
    CommonModule
  ],
    exports: [
        TableprimeComponent
      ]
})
export class TableprimeModule { }
