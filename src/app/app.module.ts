import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppSidenav } from './app.sidenav';
import {ExpansionOverviewExample} from './expansion-overview-example';
import {TableBasicExample} from './table-basic-example';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    AppSidenav,
    ExpansionOverviewExample,
    TableBasicExample
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent,AppSidenav, ExpansionOverviewExample, TableBasicExample]
})
export class AppModule { }
