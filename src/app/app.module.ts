import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JeePaginationModule } from './jee-pagination/jee-pagination.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JeePaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
