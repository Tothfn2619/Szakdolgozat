import { Component, Inject, InjectionToken } from '@angular/core';

import { DialogData, TerkepComponent } from '../terkep/terkep.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

}
