import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';
import { CanvasTrainModule } from '../canvas-train/canvas-train.module';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    //CanvasTrainModule,
    MatSelectModule
  ],
  exports:[ListComponent]
})
export class ListModule { }
