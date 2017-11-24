import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { IPlayer } from '../models/player';
import { ISpell } from '../models/spell';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

@Injectable()
export class PlayerComponent {
  player: IPlayer;

  constructor() {

  }
}
