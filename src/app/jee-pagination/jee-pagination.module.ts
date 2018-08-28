import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JeePaginationComponent } from './jee-pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    JeePaginationComponent
  ],
  exports: [
    JeePaginationComponent
  ]
})
export class JeePaginationModule { }
