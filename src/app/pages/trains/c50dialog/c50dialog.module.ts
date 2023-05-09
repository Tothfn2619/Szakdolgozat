import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C50dialogComponent } from './c50dialog.component';



@NgModule({
  declarations: [
    C50dialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[C50dialogComponent]
})
export class C50dialogModule { }
