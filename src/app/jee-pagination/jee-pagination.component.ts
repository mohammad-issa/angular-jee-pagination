import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jee-pagination',
  templateUrl: './jee-pagination.component.html',
  styleUrls: ['./jee-pagination.component.css']
})

export class JeePagination implements OnInit {
  @Input() totalRecords:number;
  @Input() perPage:number;
  @Input() showBefore:number = 2; // 2 By Default
  @Input() showAfter:number = 3; // 3 By Default
  @Input() specificPage:boolean = true; // true By Default
  @Output() controller = new EventEmitter();
  
  totalPages:number[] = [];
  jpgn:number[] = [];
  currentPage:number = 1;
  paginationLength:number;
  limit:number = 10;
  specPage:number;
  innerWidth:number;
  breakpoint:number = 480;
  dots:boolean;
  
  constructor() {
  }
  
  ngOnInit() {
    this.mobileSettings();
  }

  ngOnChanges() {
    this.paginationLength = Math.ceil(this.totalRecords / this.perPage);

    for(let i = 1 ; i <= this.paginationLength ; i++) {
      this.totalPages.push(i);
    }

    this.mobileSettings();
    
    if(this.paginationLength <= this.limit) {
      this.limitedPagination();
    } else {
      this.goToFirst();
    }

  }

  /**
   * check window width for mobile 
   */
  mobileSettings() {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth <= this.breakpoint) {
      this.showAfter = 2;
      this.showBefore = 1;
    }
  }

  /**
   * When the total page less or equal limit variable
   * no additional controllers - limited
   */
  limitedPagination() {
    this.jpgn = this.totalPages.slice(0, this.paginationLength);
  }

  /**
   * Go to the first page
   */
  goToFirst() {
    this.jpgn = this.totalPages.slice(0, this.showAfter + 1);
    this.jpgn.push.apply(this.jpgn, ['...', this.paginationLength]);
  }
  
  /**
   * Go to the last page
   */
  goToLast() {
    this.jpgn = this.totalPages.slice((this.paginationLength - this.showBefore - 1), this.paginationLength);
    this.jpgn.unshift.apply(this.jpgn, [1, '...']);
  }

  /**
   * Go to previous page
   */
  goPrev() {
    console.log('goPrev');
    if(this.currentPage > 1) {
      this.pageFunction(this.currentPage - 1);
    }
  }

  /**
   * Go to next page
   */
  goNext() {
    console.log('goNext');
    if(this.currentPage < this.paginationLength) {
      this.pageFunction(this.currentPage + 1);
    }
  }

  /**
   * Go to specific page
   */
  goToPage() {
    if(this.specPage > 0 && this.specPage <= this.paginationLength && typeof(this.specPage) === 'number') {
      this.pageFunction(this.specPage);
    }
  }

  /**
   * Page click event
   * @param page 
   */
  pageFunction(page) {

    if(typeof(page) === 'string') {
      return;
    }

    this.currentPage = page;

    // Check if the page number is exist
    if(page <= 0 && page > this.paginationLength) {
      return
    }

    // Check if the total page was less or equal limit variable (limitedPagination)
    if(this.paginationLength <= this.limit) {
      console.log('if check');
      return;
    }

    // First Page
    if(this.currentPage === 1) {
      this.goToFirst();
    }

    // Last page
    else if(this.currentPage === this.paginationLength) {
      this.goToLast();
    }

    // Lower range
    else if((this.currentPage - this.showBefore) <= 1 + 1) {
      this.jpgn = this.totalPages.slice(0, this.currentPage + this.showAfter);
      this.jpgn.push.apply(this.jpgn, ['...', this.paginationLength]);
    }

    // Upper range
    else if((this.currentPage + this.showAfter) >= (this.paginationLength - 1)){
      this.jpgn = this.totalPages.slice(this.currentPage - this.showBefore - 1, this.paginationLength);
      this.jpgn.unshift.apply(this.jpgn, [1, '...']);
    }
    
    // In between range
    else {
      this.jpgn = this.totalPages.slice(this.currentPage - this.showBefore - 1, this.currentPage + this.showAfter);
      this.jpgn.unshift.apply(this.jpgn, [1, '...']);
      this.jpgn.push.apply(this.jpgn, ['...', this.paginationLength]);
    }

    this.controller.emit(this.currentPage);
    return;

  }
}
