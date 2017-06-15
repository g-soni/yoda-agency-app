import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Agency } from './agency';

@Injectable()
export class AgencyService {

  private agencyUrl = environment.apiUrl + '/api/agencies.json';
  grades;
  
  constructor(private http: Http) {
    this.grades = [{id: 0, value: 'Padawan', color: '#E7451E'}, {id: 1, value: 'Jedi', color: '#F59A0E'}, {id: 2, value: 'Master', color: '#2DDC38'}];
  }

  getAgencies(filter: any): Observable<Agency[]> {
    let params = new URLSearchParams();
    for (var key in filter) {
      if (filter.hasOwnProperty(key)) {
        let val = filter[key];
        params.set(key, val);
      }
    }
    return this.http.get(this.agencyUrl, { search: params })
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  createAgency(agency: Agency): Observable<Agency> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.agencyUrl, JSON.stringify(agency), options)
                    .map((res:Response) => res.json().agency)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
