import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pages = 100;
  perPage = 1;
  goToBox = false;
  color = '#2196F3';

  constructor() {
  }

  ngOnInit() {
  }

  paginationController(pageNumber) {
    console.log('pageNumber', pageNumber);
  }
}
