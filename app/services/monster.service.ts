import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { IMonster, IMonsterCR } from '../models/monster';

@Injectable()
export class MonsterService {
  url: string;
  private baseUrl = 'http://www.dnd5eapi.co/api/';

  constructor(private http: Http) {

  }

  monsterList(): any[] {
    return [
      {
        'index': 5,
        'challenge_rating': 16
      },
      {
        'index': 6,
        'challenge_rating': 13
      },
      {
        'index': 3,
        'challenge_rating': 14
      },
      {
        'index': 1,
        'challenge_rating': 10
      },
      {
        'index': 4,
        'challenge_rating': 17
      },
      {
        'index': 2,
        'challenge_rating': 0.25
      },
      {
        'index': 7,
        'challenge_rating': 15
      },
      {
        'index': 8,
        'challenge_rating': 14
      },
      {
        'index': 11,
        'challenge_rating': 17
      },
      {
        'index': 9,
        'challenge_rating': 17
      },
      {
        'index': 10,
        'challenge_rating': 15
      },
      {
        'index': 12,
        'challenge_rating': 16
      },
      {
        'index': 13,
        'challenge_rating': 13
      },
      {
        'index': 14,
        'challenge_rating': 5
      },
      {
        'index': 15,
        'challenge_rating': 21
      },
      {
        'index': 16,
        'challenge_rating': 23
      },
      {
        'index': 18,
        'challenge_rating': 22
      },
      {
        'index': 17,
        'challenge_rating': 20
      },
      {
        'index': 19,
        'challenge_rating': 21
      },
      {
        'index': 20,
        'challenge_rating': 24
      },
      {
        'index': 21,
        'challenge_rating': 22
      },
      {
        'index': 22,
        'challenge_rating': 24
      },
      {
        'index': 23,
        'challenge_rating': 23
      },
      {
        'index': 24,
        'challenge_rating': 20
      },
      {
        'index': 25,
        'challenge_rating': 17
      },
      {
        'index': 26,
        'challenge_rating': 1
      },
      {
        'index': 27,
        'challenge_rating': 2
      },
      {
        'index': 28,
        'challenge_rating': 0.5
      },
      {
        'index': 29,
        'challenge_rating': 12
      },
      {
        'index': 31,
        'challenge_rating': 0
      },
      {
        'index': 30,
        'challenge_rating': 8
      },
      {
        'index': 32,
        'challenge_rating': 2
      },
      {
        'index': 33,
        'challenge_rating': 0.25
      },
      {
        'index': 34,
        'challenge_rating': 2
      },
      {
        'index': 35,
        'challenge_rating': 0
      },
      {
        'index': 36,
        'challenge_rating': 0
      },
      {
        'index': 38,
        'challenge_rating': 0.125
      },
      {
        'index': 37,
        'challenge_rating': 19
      },
      {
        'index': 39,
        'challenge_rating': 2
      },
      {
        'index': 40,
        'challenge_rating': 5
      },
      {
        'index': 42,
        'challenge_rating': 0
      },
      {
        'index': 41,
        'challenge_rating': 3
      },
      {
        'index': 43,
        'challenge_rating': 3
      },
      {
        'index': 44,
        'challenge_rating': 11
      },
      {
        'index': 45,
        'challenge_rating': 2
      },
      {
        'index': 46,
        'challenge_rating': 0.5
      },
      {
        'index': 47,
        'challenge_rating': 2
      },
      {
        'index': 48,
        'challenge_rating': 4
      },
      {
        'index': 49,
        'challenge_rating': 0.25
      },
      {
        'index': 50,
        'challenge_rating': 0.125
      },
      {
        'index': 51,
        'challenge_rating': 3
      },
      {
        'index': 52,
        'challenge_rating': 0.25
      },
      {
        'index': 53,
        'challenge_rating': 12
      },
      {
        'index': 54,
        'challenge_rating': 1
      },
      {
        'index': 55,
        'challenge_rating': 2
      },
      {
        'index': 57,
        'challenge_rating': 1
      },
      {
        'index': 56,
        'challenge_rating': 1
      },
      {
        'index': 58,
        'challenge_rating': 5
      },
      {
        'index': 59,
        'challenge_rating': 0.125
      },
      {
        'index': 60,
        'challenge_rating': 2
      },
      {
        'index': 61,
        'challenge_rating': 0
      },
      {
        'index': 62,
        'challenge_rating': 2
      },
      {
        'index': 63,
        'challenge_rating': 2
      },
      {
        'index': 64,
        'challenge_rating': 11
      },
      {
        'index': 65,
        'challenge_rating': 6
      },
      {
        'index': 66,
        'challenge_rating': 4
      },
      {
        'index': 67,
        'challenge_rating': 9
      },
      {
        'index': 68,
        'challenge_rating': 8
      },
      {
        'index': 70,
        'challenge_rating': 0.5
      },
      {
        'index': 69,
        'challenge_rating': 9
      },
      {
        'index': 71,
        'challenge_rating': 0
      },
      {
        'index': 72,
        'challenge_rating': 0.25
      },
      {
        'index': 73,
        'challenge_rating': 1
      },
      {
        'index': 74,
        'challenge_rating': 4
      },
      {
        'index': 75,
        'challenge_rating': 0
      },
      {
        'index': 76,
        'challenge_rating': 0.5
      },
      {
        'index': 77,
        'challenge_rating': 2
      },
      {
        'index': 78,
        'challenge_rating': 0.125
      },
      {
        'index': 79,
        'challenge_rating': 0.5
      },
      {
        'index': 80,
        'challenge_rating': 1
      },
      {
        'index': 81,
        'challenge_rating': 0.5
      },
      {
        'index': 83,
        'challenge_rating': 10
      },
      {
        'index': 82,
        'challenge_rating': 0
      },
      {
        'index': 84,
        'challenge_rating': 1
      },
      {
        'index': 85,
        'challenge_rating': 11
      },
      {
        'index': 86,
        'challenge_rating': 3
      },
      {
        'index': 87,
        'challenge_rating': 0.25
      },
      {
        'index': 88,
        'challenge_rating': 17
      },
      {
        'index': 89,
        'challenge_rating': 0.25
      },
      {
        'index': 90,
        'challenge_rating': 6
      },
      {
        'index': 91,
        'challenge_rating': 0.25
      },
      {
        'index': 92,
        'challenge_rating': 2
      },
      {
        'index': 93,
        'challenge_rating': 1
      },
      {
        'index': 94,
        'challenge_rating': 1
      },
      {
        'index': 95,
        'challenge_rating': 0.5
      },
      {
        'index': 96,
        'challenge_rating': 0
      },
      {
        'index': 97,
        'challenge_rating': 5
      },
      {
        'index': 98,
        'challenge_rating': 11
      },
      {
        'index': 99,
        'challenge_rating': 4
      },
      {
        'index': 100,
        'challenge_rating': 0.25
      },
      {
        'index': 101,
        'challenge_rating': 12
      },
      {
        'index': 102,
        'challenge_rating': 2
      },
      {
        'index': 103,
        'challenge_rating': 4
      },
      {
        'index': 104,
        'challenge_rating': 5
      },
      {
        'index': 105,
        'challenge_rating': 9
      },
      {
        'index': 106,
        'challenge_rating': 5
      },
      {
        'index': 109,
        'challenge_rating': 0
      },
      {
        'index': 108,
        'challenge_rating': 0.25
      },
      {
        'index': 107,
        'challenge_rating': 0.125
      },
      {
        'index': 110,
        'challenge_rating': 8
      },
      {
        'index': 111,
        'challenge_rating': 2
      },
      {
        'index': 112,
        'challenge_rating': 2
      },
      {
        'index': 113,
        'challenge_rating': 2
      },
      {
        'index': 114,
        'challenge_rating': 4
      },
      {
        'index': 115,
        'challenge_rating': 1
      },
      {
        'index': 116,
        'challenge_rating': 7
      },
      {
        'index': 117,
        'challenge_rating': 0.25
      },
      {
        'index': 118,
        'challenge_rating': 0.25
      },
      {
        'index': 119,
        'challenge_rating': 2
      },
      {
        'index': 120,
        'challenge_rating': 0.25
      },
      {
        'index': 122,
        'challenge_rating': 0.125
      },
      {
        'index': 121,
        'challenge_rating': 2
      },
      {
        'index': 124,
        'challenge_rating': 1
      },
      {
        'index': 123,
        'challenge_rating': 5
      },
      {
        'index': 125,
        'challenge_rating': 2
      },
      {
        'index': 126,
        'challenge_rating': 0
      },
      {
        'index': 127,
        'challenge_rating': 0.25
      },
      {
        'index': 129,
        'challenge_rating': 1
      },
      {
        'index': 128,
        'challenge_rating': 0.5
      },
      {
        'index': 130,
        'challenge_rating': 0.25
      },
      {
        'index': 131,
        'challenge_rating': 1
      },
      {
        'index': 132,
        'challenge_rating': 0.25
      },
      {
        'index': 133,
        'challenge_rating': 0.25
      },
      {
        'index': 134,
        'challenge_rating': 0.125
      },
      {
        'index': 135,
        'challenge_rating': 0.125
      },
      {
        'index': 136,
        'challenge_rating': 3
      },
      {
        'index': 137,
        'challenge_rating': 0.5
      },
      {
        'index': 138,
        'challenge_rating': 5
      },
      {
        'index': 140,
        'challenge_rating': 1
      },
      {
        'index': 139,
        'challenge_rating': 1
      },
      {
        'index': 142,
        'challenge_rating': 0.5
      },
      {
        'index': 141,
        'challenge_rating': 1
      },
      {
        'index': 143,
        'challenge_rating': 0.125
      },
      {
        'index': 145,
        'challenge_rating': 2
      },
      {
        'index': 146,
        'challenge_rating': 9
      },
      {
        'index': 144,
        'challenge_rating': 0.25
      },
      {
        'index': 147,
        'challenge_rating': 5
      },
      {
        'index': 148,
        'challenge_rating': 0.5
      },
      {
        'index': 149,
        'challenge_rating': 0
      },
      {
        'index': 150,
        'challenge_rating': 0.25
      },
      {
        'index': 151,
        'challenge_rating': 3
      },
      {
        'index': 153,
        'challenge_rating': 0.5
      },
      {
        'index': 152,
        'challenge_rating': 5
      },
      {
        'index': 154,
        'challenge_rating': 2
      },
      {
        'index': 155,
        'challenge_rating': 3
      },
      {
        'index': 156,
        'challenge_rating': 2
      },
      {
        'index': 157,
        'challenge_rating': 2
      },
      {
        'index': 159,
        'challenge_rating': 0.125
      },
      {
        'index': 158,
        'challenge_rating': 0.25
      },
      {
        'index': 160,
        'challenge_rating': 10
      },
      {
        'index': 161,
        'challenge_rating': 11
      },
      {
        'index': 162,
        'challenge_rating': 5
      },
      {
        'index': 165,
        'challenge_rating': 3
      },
      {
        'index': 163,
        'challenge_rating': 1
      },
      {
        'index': 164,
        'challenge_rating': 0
      },
      {
        'index': 166,
        'challenge_rating': 8
      },
      {
        'index': 167,
        'challenge_rating': 5
      },
      {
        'index': 168,
        'challenge_rating': 1
      },
      {
        'index': 169,
        'challenge_rating': 0.5
      },
      {
        'index': 170,
        'challenge_rating': 0
      },
      {
        'index': 172,
        'challenge_rating': 2
      },
      {
        'index': 171,
        'challenge_rating': 11
      },
      {
        'index': 173,
        'challenge_rating': 8
      },
      {
        'index': 174,
        'challenge_rating': 0
      },
      {
        'index': 175,
        'challenge_rating': 14
      },
      {
        'index': 176,
        'challenge_rating': 0.5
      },
      {
        'index': 179,
        'challenge_rating': 16
      },
      {
        'index': 178,
        'challenge_rating': 6
      },
      {
        'index': 177,
        'challenge_rating': 1
      },
      {
        'index': 180,
        'challenge_rating': 0
      },
      {
        'index': 181,
        'challenge_rating': 3
      },
      {
        'index': 182,
        'challenge_rating': 3
      },
      {
        'index': 183,
        'challenge_rating': 0.125
      },
      {
        'index': 184,
        'challenge_rating': 23
      },
      {
        'index': 186,
        'challenge_rating': 0
      },
      {
        'index': 185,
        'challenge_rating': 4
      },
      {
        'index': 188,
        'challenge_rating': 1
      },
      {
        'index': 187,
        'challenge_rating': 21
      },
      {
        'index': 189,
        'challenge_rating': 0
      },
      {
        'index': 190,
        'challenge_rating': 0.5
      },
      {
        'index': 192,
        'challenge_rating': 0.5
      },
      {
        'index': 191,
        'challenge_rating': 6
      },
      {
        'index': 193,
        'challenge_rating': 0.5
      },
      {
        'index': 194,
        'challenge_rating': 6
      },
      {
        'index': 195,
        'challenge_rating': 3
      },
      {
        'index': 196,
        'challenge_rating': 16
      },
      {
        'index': 198,
        'challenge_rating': 6
      },
      {
        'index': 197,
        'challenge_rating': 0.125
      },
      {
        'index': 199,
        'challenge_rating': 0.125
      },
      {
        'index': 200,
        'challenge_rating': 2
      },
      {
        'index': 201,
        'challenge_rating': 2
      },
      {
        'index': 202,
        'challenge_rating': 3
      },
      {
        'index': 203,
        'challenge_rating': 2
      },
      {
        'index': 204,
        'challenge_rating': 0.125
      },
      {
        'index': 205,
        'challenge_rating': 3
      },
      {
        'index': 206,
        'challenge_rating': 15
      },
      {
        'index': 207,
        'challenge_rating': 13
      },
      {
        'index': 208,
        'challenge_rating': 5
      },
      {
        'index': 209,
        'challenge_rating': 3
      },
      {
        'index': 210,
        'challenge_rating': 0.125
      },
      {
        'index': 211,
        'challenge_rating': 2
      },
      {
        'index': 212,
        'challenge_rating': 0
      },
      {
        'index': 213,
        'challenge_rating': 2
      },
      {
        'index': 214,
        'challenge_rating': 2
      },
      {
        'index': 215,
        'challenge_rating': 7
      },
      {
        'index': 216,
        'challenge_rating': 0.5
      },
      {
        'index': 217,
        'challenge_rating': 5
      },
      {
        'index': 218,
        'challenge_rating': 0
      },
      {
        'index': 219,
        'challenge_rating': 3
      },
      {
        'index': 220,
        'challenge_rating': 0.25
      },
      {
        'index': 221,
        'challenge_rating': 2
      },
      {
        'index': 222,
        'challenge_rating': 3
      },
      {
        'index': 223,
        'challenge_rating': 20
      },
      {
        'index': 224,
        'challenge_rating': 16
      },
      {
        'index': 225,
        'challenge_rating': 2
      },
      {
        'index': 226,
        'challenge_rating': 0.125
      },
      {
        'index': 227,
        'challenge_rating': 2
      },
      {
        'index': 228,
        'challenge_rating': 0.125
      },
      {
        'index': 229,
        'challenge_rating': 2
      },
      {
        'index': 230,
        'challenge_rating': 0.25
      },
      {
        'index': 231,
        'challenge_rating': 15
      },
      {
        'index': 232,
        'challenge_rating': 1
      },
      {
        'index': 233,
        'challenge_rating': 0
      },
      {
        'index': 235,
        'challenge_rating': 0
      },
      {
        'index': 234,
        'challenge_rating': 13
      },
      {
        'index': 236,
        'challenge_rating': 0
      },
      {
        'index': 237,
        'challenge_rating': 4
      },
      {
        'index': 238,
        'challenge_rating': 0.5
      },
      {
        'index': 239,
        'challenge_rating': 11
      },
      {
        'index': 240,
        'challenge_rating': 2
      },
      {
        'index': 241,
        'challenge_rating': 0.25
      },
      {
        'index': 242,
        'challenge_rating': 11
      },
      {
        'index': 243,
        'challenge_rating': 5
      },
      {
        'index': 244,
        'challenge_rating': 2
      },
      {
        'index': 245,
        'challenge_rating': 0.5
      },
      {
        'index': 246,
        'challenge_rating': 2
      },
      {
        'index': 247,
        'challenge_rating': 0.5
      },
      {
        'index': 248,
        'challenge_rating': 5
      },
      {
        'index': 249,
        'challenge_rating': 0.5
      },
      {
        'index': 250,
        'challenge_rating': 0
      },
      {
        'index': 251,
        'challenge_rating': 0.5
      },
      {
        'index': 252,
        'challenge_rating': 2
      },
      {
        'index': 254,
        'challenge_rating': 0.5
      },
      {
        'index': 253,
        'challenge_rating': 0
      },
      {
        'index': 255,
        'challenge_rating': 5
      },
      {
        'index': 257,
        'challenge_rating': 0
      },
      {
        'index': 256,
        'challenge_rating': 7
      },
      {
        'index': 258,
        'challenge_rating': 2
      },
      {
        'index': 259,
        'challenge_rating': 0.25
      },
      {
        'index': 261,
        'challenge_rating': 1
      },
      {
        'index': 260,
        'challenge_rating': 21
      },
      {
        'index': 262,
        'challenge_rating': 0
      },
      {
        'index': 263,
        'challenge_rating': 8
      },
      {
        'index': 264,
        'challenge_rating': 0.25
      },
      {
        'index': 265,
        'challenge_rating': 1
      },
      {
        'index': 266,
        'challenge_rating': 0.25
      },
      {
        'index': 267,
        'challenge_rating': 0.125
      },
      {
        'index': 268,
        'challenge_rating': 7
      },
      {
        'index': 269,
        'challenge_rating': 10
      },
      {
        'index': 270,
        'challenge_rating': 13
      },
      {
        'index': 271,
        'challenge_rating': 4
      },
      {
        'index': 272,
        'challenge_rating': 0.25
      },
      {
        'index': 273,
        'challenge_rating': 0.5
      },
      {
        'index': 274,
        'challenge_rating': 0.5
      },
      {
        'index': 276,
        'challenge_rating': 2
      },
      {
        'index': 275,
        'challenge_rating': 0.5
      },
      {
        'index': 277,
        'challenge_rating': 1
      },
      {
        'index': 278,
        'challenge_rating': 0.25
      },
      {
        'index': 279,
        'challenge_rating': 0.25
      },
      {
        'index': 280,
        'challenge_rating': 0.5
      },
      {
        'index': 281,
        'challenge_rating': 0.5
      },
      {
        'index': 282,
        'challenge_rating': 30
      },
      {
        'index': 283,
        'challenge_rating': 0.5
      },
      {
        'index': 284,
        'challenge_rating': 1
      },
      {
        'index': 286,
        'challenge_rating': 0.125
      },
      {
        'index': 285,
        'challenge_rating': 9
      },
      {
        'index': 287,
        'challenge_rating': 5
      },
      {
        'index': 289,
        'challenge_rating': 8
      },
      {
        'index': 288,
        'challenge_rating': 5
      },
      {
        'index': 290,
        'challenge_rating': 5
      },
      {
        'index': 291,
        'challenge_rating': 13
      },
      {
        'index': 292,
        'challenge_rating': 5
      },
      {
        'index': 293,
        'challenge_rating': 3
      },
      {
        'index': 294,
        'challenge_rating': 0.25
      },
      {
        'index': 295,
        'challenge_rating': 6
      },
      {
        'index': 296,
        'challenge_rating': 0
      },
      {
        'index': 297,
        'challenge_rating': 0.5
      },
      {
        'index': 299,
        'challenge_rating': 5
      },
      {
        'index': 298,
        'challenge_rating': 0.5
      },
      {
        'index': 300,
        'challenge_rating': 0
      },
      {
        'index': 301,
        'challenge_rating': 5
      },
      {
        'index': 302,
        'challenge_rating': 4
      },
      {
        'index': 303,
        'challenge_rating': 2
      },
      {
        'index': 304,
        'challenge_rating': 4
      },
      {
        'index': 305,
        'challenge_rating': 3
      },
      {
        'index': 308,
        'challenge_rating': 2
      },
      {
        'index': 307,
        'challenge_rating': 3
      },
      {
        'index': 306,
        'challenge_rating': 2
      },
      {
        'index': 309,
        'challenge_rating': 3
      },
      {
        'index': 310,
        'challenge_rating': 0.25
      },
      {
        'index': 311,
        'challenge_rating': 0.5
      },
      {
        'index': 312,
        'challenge_rating': 5
      },
      {
        'index': 313,
        'challenge_rating': 6
      },
      {
        'index': 314,
        'challenge_rating': 5
      },
      {
        'index': 315,
        'challenge_rating': 7
      },
      {
        'index': 316,
        'challenge_rating': 9
      },
      {
        'index': 317,
        'challenge_rating': 6
      },
      {
        'index': 318,
        'challenge_rating': 8
      },
      {
        'index': 319,
        'challenge_rating': 7
      },
      {
        'index': 320,
        'challenge_rating': 10
      },
      {
        'index': 321,
        'challenge_rating': 8
      },
      {
        'index': 322,
        'challenge_rating': 10
      },
      {
        'index': 323,
        'challenge_rating': 9
      },
      {
        'index': 324,
        'challenge_rating': 6
      },
      {
        'index': 325,
        'challenge_rating': 0.25
      }
    ];
  }

  getMonsters(): Observable<Array<IMonster>> {
    return this.http.get(`${this.baseUrl}monsters`)
      .map(res => res.json());
  }

  getMonster(monster: string): Observable<IMonster> {
    return this.http.get(`${this.baseUrl}monsters/${monster}`)
      .map(res => res.json());
  }

  getMonsterCR(monster: string): Observable<IMonsterCR> {
    return this.http.get(`${this.baseUrl}monsters/${monster}`)
      .map(res => res.json());
  }
}
