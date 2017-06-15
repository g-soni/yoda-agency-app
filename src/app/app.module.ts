import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from "@uirouter/angular";
import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AgencyComponent } from './agency/agency.component';
import { AgencyService } from './agency/agency.service';

let agencyState = { name: "agency", redirectTo: "/",  component: AgencyComponent }; 

@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NoopAnimationsModule,
    UIRouterModule.forRoot({ states: [ agencyState ], useHash: true })
  ],
  providers: [AgencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
