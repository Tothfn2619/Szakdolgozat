import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kv4Component } from './kv4.component';



@NgModule({
  declarations: [
    Kv4Component
  ],
  imports: [
    CommonModule
  ],
  exports:[Kv4Component]
})
export class Kv4Module { }
