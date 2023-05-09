import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasTrainComponent } from './canvas-train.component';



@NgModule({
  declarations: [
    CanvasTrainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CanvasTrainComponent]
})
export class CanvasTrainModule { }
