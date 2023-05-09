import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaxComponent } from './bax.component';



@NgModule({
  declarations: [
    BaxComponent
  ],
  imports: [
    CommonModule
  ], exports: [BaxComponent]
})
export class BaxModule { }
