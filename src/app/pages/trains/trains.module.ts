import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainsComponent } from './trains.component';
import { TrainsRoutingModule } from './trains-routing.module';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ViewerModule } from './viewer/viewer.module';
import { ListModule } from './list/list.module';
import { ImageModule } from './image/image.module';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CanvasTrainModule } from './canvas-train/canvas-train.module';
import { DialogModule } from './dialog/dialog.module';
import { Mk48hModule } from './mk48h/mk48h.module';
import { Kv4Module } from './kv4/kv4.module';
import { AbamotModule } from './abamot/abamot.module';
import { DiamondModule } from './diamond/diamond.module';
import { KismavModule } from './kismav/kismav.module';
import { NagymavModule } from './nagymav/nagymav.module';
import { B26Module } from './b26/b26.module';
import { BaxModule } from './bax/bax.module';
import { HarmincegyModule } from './harmincegy/harmincegy.module';
import { HarminckettoModule } from './harmincketto/harmincketto.module';
import { HarmincharomModule } from './harmincharom/harmincharom.module';

import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    TrainsComponent
  ],
  imports: [
    CommonModule,
    TrainsRoutingModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    ViewerModule,
    ListModule,
    ImageModule,
    CanvasTrainModule,
    DialogModule,
    Mk48hModule,
    Kv4Module,
    AbamotModule,
    DiamondModule,
    KismavModule,
    NagymavModule,
    B26Module,
    BaxModule,
    HarmincegyModule,
    HarminckettoModule,
    HarmincharomModule
  ],
  exports:[TrainsComponent]
})
export class TrainsModule { }
