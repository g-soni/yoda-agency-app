import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AgencyComponent } from './agency/agency.component';
import { AgencyService } from './agency/agency.service';
import { sortByGradePipe } from './agency/sort-by-grade.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,
    sortByGradePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [AgencyService, sortByGradePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
