import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable, OnChanges } from '@angular/core';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { MonsterService } from '../../services/monster.service';

// import {SpellCardModule} from '../../components/spell-card-component/spell-card.module';
import { IMonster, IMonsterCR } from '../../models/monster';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'monster-list',
    templateUrl: './monster-list.component.html',
    styleUrls: ['./monster-list.component.css'],
    providers: [MonsterService]
})

@Injectable()
export class MonsterListComponent implements OnInit {

    monsterResponse: IMonster = null;
    monsters: IMonster[] = [];
    monsterNumbers: Array<any>;
    monsterCRResponse: IMonsterCR = null;
    junkList: IMonsterCR[] = [];


    constructor(private monsterService: MonsterService) {
    }

    ngOnInit() {
        this.monsterNumbers = this.monsterService.monsterList().filter(x => x.challenge_rating === .25);

        for (const monsterNumber of this.monsterNumbers) {
        this.monsterService.getMonster(String(monsterNumber.index))
            .subscribe(response => {
                this.monsterResponse = response
                this.monsters.push(this.monsterResponse);
            });
        }

        // const lowEnd = 1,
        //     highEnd = 325,
        //     list = [];

        // for (let i = lowEnd; i <= highEnd; i++) {
        //     list.push(i);
        // }
        // for (const item of list) {

        //     this.factoryService.getMonsterCR(String(item))
        //         .subscribe(response => {
        //             this.monsterCRResponse = response
        //             const rec = { index: this.monsterCRResponse.index, challenge_rating: this.monsterCRResponse.challenge_rating };

        //             this.junkList.push(rec);
        //         });
        // }
        // console.log(this.junkList);

    }
}
