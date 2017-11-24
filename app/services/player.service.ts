import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IPlayer } from '../models/player';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class PlayerService {
  // url: string;
  private baseUrl = 'http://localhost:8080/api/';
  // private baseUrl = 'http://127.0.0.1:8080/api';

  constructor(private http: Http) {
  }

  getPlayer(): Observable<IPlayer> {
    return this.http.get(`${this.baseUrl}`)
      .map(res => res.json());
  }

  savePlayer(player: IPlayer): Observable<IPlayer> {
    return this.http.put(`${this.baseUrl}`, player)
      .map(res => res.json());
  }
}
