import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerkepComponent } from './terkep.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    TerkepComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[TerkepComponent]
})
export class TerkepModule { }
