import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { DialogComponent } from '../dialog/dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { CanvasTrainModule } from '../canvas-train/canvas-train.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  @Input() trainsObjectInput: Array<any> =[];
  @Output() trainObjectEmitter:EventEmitter<any>= new EventEmitter();
  chosenTrain:any;
  constructor(private dialogRef: MatDialog){}

  ngOnInit(){
    this.chosenTrain = this.trainsObjectInput[0];
    this.reload();
  }
  reload(){
    this.trainObjectEmitter.emit(this.chosenTrain);
  }

}
