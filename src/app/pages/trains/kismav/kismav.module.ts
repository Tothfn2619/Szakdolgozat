import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KismavComponent } from './kismav.component';



@NgModule({
  declarations: [
    KismavComponent
  ],
  imports: [
    CommonModule
  ], exports:[KismavComponent]
})
export class KismavModule { }
