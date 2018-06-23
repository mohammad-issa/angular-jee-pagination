import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JeePagination } from './jee-pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    JeePagination
  ],
  exports: [
    JeePagination
  ]
})
export class JeePaginationModule { }
