import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NagymavComponent } from './nagymav.component';



@NgModule({
  declarations: [
    NagymavComponent
  ],
  imports: [
    CommonModule
  ],exports:[NagymavComponent]
})
export class NagymavModule { }
