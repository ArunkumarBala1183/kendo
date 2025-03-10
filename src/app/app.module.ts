import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { UpcomingAuctionsComponent } from './upcoming-auctions/upcoming-auctions.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    UpcomingAuctionsComponent
  ],
  imports: [
    BrowserModule,
    DateInputsModule,
    BrowserAnimationsModule,
    GridModule,
    HttpClientModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
