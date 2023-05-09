import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { CanvasTrainModule } from '../canvas-train/canvas-train.module';



@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    CanvasTrainModule
  ], 
  exports:[DialogComponent]
})
export class DialogModule { }
