import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { IArmor } from '../models/armor';

@Injectable()
export class ArmorService {
  url: string;
  private baseUrl = 'http://www.dnd5eapi.co/api/';

  constructor(private http: Http) {
  }

  getArmors(): Observable<Array<IArmor>> {
    return this.http.get(`${this.baseUrl}equipment`)
      .map(res => res.json());
  }

  getArmor(armor: string): Observable<IArmor> {
    return this.http.get(`${this.baseUrl}equipment/${armor}`)
      .map(res => res.json());
  }

}
