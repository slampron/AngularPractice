import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { IWeapon } from '../models/weapon';


@Injectable()
export class WeaponService {
    url: string;
    spell: string;
    weapon: string;
    private baseUrl = 'http://www.dnd5eapi.co/api/';

    constructor(private http: Http) {
    }

    getWeapon(weapon: string): Observable<IWeapon> {
        return this.http.get(`${this.baseUrl}equipment/${weapon}`)
            .map(res => res.json());
    }

    getWeapons(): Observable<Array<IWeapon>> {
        return this.http.get(`${this.baseUrl}equipment`)
            .map(res => res.json());
    }
}
