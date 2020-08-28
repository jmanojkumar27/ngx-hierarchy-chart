import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxHierarchyChartModule } from 'ngx-hierarchy-chart';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHierarchyChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
