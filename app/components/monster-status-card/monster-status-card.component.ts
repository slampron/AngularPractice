import { Component, OnInit, Input, Output } from '@angular/core';
import { MonsterService } from '../../services/monster.service';
import { FactoryService } from '../../services/factory.service';
import { IMonster } from '../../models/monster';
import { DecimalPipe } from '@angular/common';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'monster-status-card',
  templateUrl: './monster-status-card.component.html',
  styleUrls: ['./monster-status-card.component.css'],
  providers: [FactoryService]
})
export class MonsterStatusCardComponent implements OnInit {
  color = 'primary';
  mode = 'determinate';
  value = 100;
  bufferValue = 75;

  @Input() monster: IMonster;
  @Input() pbValue: number;

  @Output() monsterDamage: number;
  @Output() currentHP: number;
  constructor(private factoryService: FactoryService) {

  }

  ngOnInit() {
    this.currentHP = this.monster.hit_points;
  }

  attack() {

    let damage = 0;

    if (!this.currentHP || this.currentHP < 1) {
      this.currentHP = 0;
      return;
    }

    if (this.factoryService.rollDice('1d20') >= this.monster.armor_class ) {
    damage = Math.floor(Math.random() * this.pbValue) + 1;
    };

    this.currentHP -= damage;
    this.value = (this.currentHP / this.monster.hit_points) * 100;

    this.currentHP = (this.currentHP < 0) ? 0 : this.currentHP;

    if (this.value > 50) {
      this.color = 'primary';
    }
    if (this.value < 50) {
      this.color = 'warn';
    }
    if (this.currentHP >= 0) {
      this.monsterAttack();
      console.log('Monster Attack', this.monsterDamage);
      console.log('Player Attack', damage);
    }

  }

  monsterAttack() {
    if (this.factoryService.rollDice('1d20') >= 11) {
      this.monsterDamage = this.factoryService.rollDice(this.monster.actions[0].damage_dice);
    } else {
      this.monsterDamage = 0;
    }



  }
}
