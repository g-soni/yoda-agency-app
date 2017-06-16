import { Component, OnInit, ViewChild } from '@angular/core';
import { AgencyService } from './agency.service';
import { NgForm } from '@angular/forms';
import { Agency } from './agency';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'agency-section',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
})
export class AgencyComponent implements OnInit {

  grades;
  agencies: Agency[] = [];
  errorMessage: any;
  agency: Agency;
  filter: any;

  @ViewChild('agencyForm') public agencyForm: NgForm;
   
  constructor(private agencyService: AgencyService, private snackBar: MdSnackBar) {
    this.grades = agencyService.grades;
    this.agency = new Agency();
    this.filter = {name: '', tag: ''};
  }

  ngOnInit() {
    this.searchAgencies(null);
  }

  
  saveAgency(agency:any):void {
    if(this.agencyForm.valid) {
      this.agencyService.createAgency(this.agency)
                        .subscribe(
                            data => {
                              this.snackBar.open('Agency Created', '', {
                              duration: 2000,
                            });
                            this.filter = {name: '', tag: ''};
                            this.searchAgencies(this.filter);
                          },
                          error =>  {
                            this.errorMessage = <any>error;
                            this.snackBar.open(this.errorMessage, '', {
                              duration: 2000,
                            });
                          });
    }
    else {
      this.errorMessage = 'Invalid form';
      this.snackBar.open(this.errorMessage, '', {
        duration: 2000,
      });
    }
  }

  searchAgencies(filter:any):void {
    this.agencyService.getAgencies(this.filter)
                      .subscribe(
                        agencies => this.agencies = agencies,
                        error =>  {
                          this.errorMessage = <any>error;
                          this.snackBar.open(this.errorMessage, '', {
                            duration: 2000,
                          });
                        });
  }

  getColor(grade: any):void {
    let g = this.grades.filter(grd => grd.value == grade)[0];
    return g ? g.color : '#E3DFDE';
  }
  
}
