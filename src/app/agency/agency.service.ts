import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Agency } from './agency';

@Injectable()
export class AgencyService {

  private agencyUrl = environment.apiUrl + '/api/agencies.json';
  
  constructor(private http: Http) { }

  getAgencies(): Observable<Agency[]> {
    return this.http.get(this.agencyUrl)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
