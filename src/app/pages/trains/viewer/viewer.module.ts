import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    ViewerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports:[ViewerComponent]
})
export class ViewerModule { }
