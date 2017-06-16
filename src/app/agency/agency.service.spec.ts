/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgencyService } from './agency.service';
import { Agency } from './agency';
import { MaterialModule } from '@angular/material'
import { HttpModule, XHRBackend, Response, ResponseOptions} from '@angular/http';
 import { MockBackend } from '@angular/http/testing';

describe('AgencyService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, HttpModule ]
      providers: [AgencyService, { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  it('should ...', inject([AgencyService], (service: AgencyService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<Array<Agency>>',
    inject([AgencyService, XHRBackend], (agencyService, mockBackend) => {
      const mockResponse = {
        data: [
          { id: 1, name: 'Agency 1', description: 'Desc 1', grade: 'Master' },
          { id: 2, name: 'Agency 2', description: 'Desc 2'  grade: 'Padwan' },
          { id: 3, name: 'Agency 3', description: 'Desc 3', grade: 'Master' },
          { id: 4, name: 'Agency 4', description: 'Desc 4', grade: 'Jedi' },
        ]
      };
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      agencyService.getAgencies(null).subscribe((agencies) => {
        expect(agencies.data.length).toBe(4);
        expect(agencies.data[0].name).toEqual('Agency 1');
        expect(agencies.data[1].name).toEqual('Agency 2');
        expect(agencies.data[2].name).toEqual('Agency 3');
        expect(agencies.data[3].name).toEqual('Agency 4');
      });
  }));

  it('should insert new agency entries', async(() => {
    inject([AgencyService, XHRBackend], (agencyService, mockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Post);
        connection.mockRespond(new Response(new ResponseOptions({status: 201})));
      });

      let data: Agency = new Agency(5, 'New Agency', 'This is an agency', 'Master'); 
      agencyService.createAgency(data).subscribe(
        (result) => {
          expect(result).toBeDefined();
          expect(result.status).toBe(201);
        });
      });
  }));
  
});



