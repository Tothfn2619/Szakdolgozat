import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';

import {MatCardModule} from '@angular/material/card';
import { SplashRoutingModule } from './splash-routing.module';
import {MatRippleModule} from '@angular/material/core';





@NgModule({
  declarations: [
    SplashComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SplashRoutingModule,
    MatRippleModule
  ],

  exports: [SplashComponent]
})
export class SplashModule { }
