import { Component, Input } from '@angular/core';
import { TrainsObject } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {

  @Input() trainInput: any;
  trainObject: Array<any> = TrainsObject;

  displayedColumns: string[] = ['name', 'gyartas','kozlekedik','megjegyzes'];
  dataSource=TrainsObject;

}
