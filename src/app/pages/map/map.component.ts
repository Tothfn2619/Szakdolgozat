import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
 /* chosenMap: any
  loadMap(map: any) {
    this.chosenMap = map;
  }*/
  constructor(private dialogRef: MatDialog) { }

  openDialog() {
    this.dialogRef.open(InfoComponent);
  }
}
