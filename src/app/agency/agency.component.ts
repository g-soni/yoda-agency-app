import { Component, OnInit } from '@angular/core';
import { AgencyService } from './agency.service';
import { Agency } from './agency';

@Component({
  selector: 'agency-section',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  grades;
  agencies: Agency[] = [];
  errorMessage: any;
  
  constructor(private agencyService: AgencyService) {
    this.grades = [{id: 1, value: 'padawan'}, {id: 2, value: 'jedi'}, {id: 3, value: 'master'}];
  }

  ngOnInit() {
    this.agencyService.getAgencies()
                      .subscribe(
                       agencies => this.agencies = agencies,
                       error =>  this.errorMessage = <any>error);
  }

}
