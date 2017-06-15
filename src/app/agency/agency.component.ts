import { Component, OnInit, ViewChild } from '@angular/core';
import { AgencyService } from './agency.service';
import { NgForm } from '@angular/forms';
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
  agency: Agency;

  @ViewChild('agencyForm') public agencyForm: NgForm;
   
  constructor(private agencyService: AgencyService) {
    this.grades = [{id: 0, value: 'Padawan', color: '#E7451E'}, {id: 1, value: 'Jedi', color: '#F59A0E'}, {id: 2, value: 'Master', color: '#2DDC38'}];
    this.agency = new Agency();
  }

  ngOnInit() {
    this.agencyService.getAgencies()
                      .subscribe(
                        agencies => this.agencies = agencies,
                        error =>  this.errorMessage = <any>error);
  }

  saveAgency(agency:any):void {
    console.log(this.agencyForm.valid);
    this.agencyService.createAgency(this.agency)
                      .subscribe(
                        data => {
                          this.agencies.push(data);
                        },
                        error =>  this.errorMessage = <any>error);
  }

  getColor(grade: any):void {
    let g = this.grades.filter(grd => grd.value == grade)[0];
    return g ? g.color : '#E3DFDE';
  }
  
}
