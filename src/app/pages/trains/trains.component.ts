import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrainsObject } from 'src/app/shared/constants/constants';
import { AbamotComponent } from './abamot/abamot.component';
import { B26Component } from './b26/b26.component';
import { BaxComponent } from './bax/bax.component';
import { C50dialogComponent } from './c50dialog/c50dialog.component';
import { CanvasTrainComponent } from './canvas-train/canvas-train.component';
import { DiamondComponent } from './diamond/diamond.component';
import { HarmincegyComponent } from './harmincegy/harmincegy.component';
import { HarmincharomComponent } from './harmincharom/harmincharom.component';
import { HarminckettoComponent } from './harmincketto/harmincketto.component';
import { KismavComponent } from './kismav/kismav.component';
import { Kv4Component } from './kv4/kv4.component';
import { Mk48hComponent } from './mk48h/mk48h.component';
import { NagymavComponent } from './nagymav/nagymav.component';



@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.scss']
})
export class TrainsComponent {
  //urlvalue: any;

  //megoldas ='';

  trainObject: Array<any> = TrainsObject;
  chosenTrain: any



  loadTrain(train: any) {
    this.chosenTrain = train;
  }
  constructor(private dialogRef: MatDialog) { }

 

  openDialog() {

    if (this.chosenTrain.value === "mk48") {
      this.dialogRef.open(CanvasTrainComponent);
    }
    if (this.chosenTrain.value === "c50") {
      this.dialogRef.open(C50dialogComponent);
    }
    if (this.chosenTrain.value === "mk48h") {
      this.dialogRef.open(Mk48hComponent);
    }
    if (this.chosenTrain.value === "kv4") {
      this.dialogRef.open(Kv4Component);
    }
    if (this.chosenTrain.value === "abamot") {
      this.dialogRef.open(AbamotComponent);
    }
    if (this.chosenTrain.value === "diamond") {
      this.dialogRef.open(DiamondComponent);
    }
    if (this.chosenTrain.value === "kismav") {
      this.dialogRef.open(KismavComponent);
    }
    if (this.chosenTrain.value === "nagymav") {
      this.dialogRef.open(NagymavComponent);
    }
    if (this.chosenTrain.value === "b26") {
      this.dialogRef.open(B26Component);
    }
    if (this.chosenTrain.value === "bax") {
      this.dialogRef.open(BaxComponent);
    }
    if (this.chosenTrain.value === "31") {
      this.dialogRef.open(HarmincegyComponent);
    }
    if (this.chosenTrain.value === "32") {
      this.dialogRef.open(HarminckettoComponent);
    }
    if (this.chosenTrain.value === "33") {
      this.dialogRef.open(HarmincharomComponent);
    }
   
  }

}
