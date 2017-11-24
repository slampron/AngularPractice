import { Component, Input } from '@angular/core';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { IMonster } from '../../models/monster';
import { Observable } from 'rxjs/Observable';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.css']
})

export class MonsterCardComponent {
  @Input() monster: IMonster;

  constructor() {

  }
}
