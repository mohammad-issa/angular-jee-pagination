import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  pages: number = 100;
  perPage: number = 1;
  showBefore: number = 1;
  showAfter:number = 1;

  constructor() {
  }

  ngOnInit() {
  }

  paginationController(pageNumber) {
    console.log('pageNumber', pageNumber)
  }
}
