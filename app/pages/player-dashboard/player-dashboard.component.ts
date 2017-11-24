import { Component, OnInit } from '@angular/core';
import { Injectable, OnChanges } from '@angular/core';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule, MatChipsModule, MdChipInputEvent } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { ISpell } from '../../models/spell';
import { IMonster } from '../../models/monster';
import { IPlayer } from '../../models/player';

import { MonsterService } from '../../services/monster.service';
import { PlayerService } from '../../services/player.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'player-dashboard',
    templateUrl: './player-dashboard.component.html',
    styleUrls: ['./player-dashboard.component.css'],
    providers: [MonsterService,
        PlayerService]
})

@Injectable()
export class PlayerDashboardComponent implements OnInit {
    spells: ISpell[] = [];
    selectedSpells: ISpell[] = [];
    monsterResponse: IMonster = null;
    monsters: IMonster[] = [];
    monsterNumbers: Array<any>;
    pbValue = 12;
    player: IPlayer = null;

    constructor(private monsterService: MonsterService, private playerService: PlayerService) {
    }

    ngOnInit() {
        this.spells = JSON.parse(localStorage.getItem('Spell'));
        this.spells.sort((x) => x.level);

        this.monsterNumbers = this.monsterService.monsterList().filter(x => x.challenge_rating === .25);

        for (const monsterNumber of this.monsterNumbers) {
            this.monsterService.getMonster(String(monsterNumber.index))
                .subscribe(response => {
                    this.monsterResponse = response
                    this.monsters.push(this.monsterResponse);
                });
        }

        this.playerService.getPlayer()
            .subscribe(response => {
                this.player = response;
                console.log('Get Player', response);
            }, err => console.log(err));

        this.playerService.savePlayer(this.player)
            .subscribe(response => {
                this.player = response;
               console.log('Saved Player', this.player);
            }, err => console.log(err));

        console.log(this.player);
    }

    selectedSpell(x: ISpell) {

        this.selectedSpells.push(x);

    }

}
