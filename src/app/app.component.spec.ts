/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material'
import { HttpModule } from '@angular/http';
import { AgencyComponent } from './agency/agency.component';
import { AgencyService } from './agency/agency.service';
import { sortByGradePipe } from './agency/sort-by-grade.pipe';
import { FormsModule }   from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UIRouterModule } from '@uirouter/angular';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
     imports: [ MaterialModule, HttpModule, FormsModule, NoopAnimationsModule, UIRouterModule.forRoot({ useHash: true }) ],
      declarations: [
        AppComponent,
        AgencyComponent,
        sortByGradePipe,
      ],
      providers: [sortByGradePipe, AgencyService]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
