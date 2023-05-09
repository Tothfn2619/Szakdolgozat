import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { enableProdMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lillafüredi kisvasút';
  //page = 'trains';

  constructor(private router: Router) { }

  /*
  changePage(selectedPage: string) {
    this.router.navigateByUrl(selectedPage);
  }*/
}
