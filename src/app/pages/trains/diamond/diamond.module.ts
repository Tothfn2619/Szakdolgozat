import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiamondComponent } from './diamond.component';



@NgModule({
  declarations: [
    DiamondComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DiamondComponent]
})
export class DiamondModule { }
