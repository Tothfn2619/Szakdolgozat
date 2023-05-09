import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';
import { TerkepModule } from './terkep/terkep.module';
import { ListModule } from './list/list.module';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    TerkepModule,
    //ListModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [MapComponent]
})
export class MapModule { }
