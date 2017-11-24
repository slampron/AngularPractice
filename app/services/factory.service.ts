import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { IArmor } from '../models/armor';
import { IEquipment } from '../models/equipment';

@Injectable()
export class FactoryService {
  url: string;
  private baseUrl = 'http://www.dnd5eapi.co/api/';

  constructor(private http: Http) {
  }

  rollDice(dice: string): number {
    dice.split('d');

    let result = 0;
    let x = 0;

    const roll = Number(dice[0]);
    let die = (Number(dice[2]) === 1) ? 10 : Number(dice[2]);
          die = (Number(dice[2]) === 2) ? 20 : Number(dice[2]);

// console.log('Roll', roll, 'Die', die);
    for (let i = 0; i < Number(roll); i++) {
      x = Math.floor(Math.random() * die) + 1;
      result += x;
    }
    return result;

  }

  // let getAll<string>(array.index)
  getAll<T>(rg: T[]): void {

    // const lowEnd = 1,
    //   highEnd = 305,
    //   list = [];


    // for (let i = lowEnd; i <= highEnd; i++) {
    //   list.push(i);
    // }
    // for (const item of list) {

    //   this.spellService.getSpellLevel(String(item))
    //     .subscribe(response => {
    //      this.spellLevelResponse = response
    //       const rec = {
    //         index: this.spellLevelResponse.index,
    //         name: this.spellLevelResponse.name,
    //         level: this.spellLevelResponse.level
    //       };

    //       this.junkList.push(rec);
    //     });
    // }
    // console.log(this.junkList);
  }
}
