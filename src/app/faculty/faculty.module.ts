import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoneComponent } from './fone/fone.component';



@NgModule({
  declarations: [FoneComponent],
  imports: [
    CommonModule
  ],
  exports: [ FoneComponent ]
})
export class FacultyModule { }
