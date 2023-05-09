import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';
import { ListRoutingModule } from './list-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { InfoModule } from '../info/info.module';




@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ListRoutingModule,
    MatDialogModule,
    //InfoModule
  ],
  exports:[ListComponent]
})
export class ListModule { }
