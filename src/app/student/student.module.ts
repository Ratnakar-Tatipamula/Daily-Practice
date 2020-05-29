import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FcComponent } from './fc/fc.component';



@NgModule({
  declarations: [FcComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FcComponent
  ]

})
export class StudentModule { }
