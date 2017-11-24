import { Component, Input } from '@angular/core';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { ISpell } from '../../models/spell';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'compact-spell-card',
  templateUrl: './compact-spell-card.component.html',
  styleUrls: ['./compact-spell-card.component.css']
})

export class CompactSpellCardComponent {
  @Input() spell: ISpell;

  constructor() {

  }

  dropSpell() {
    const spell = this.spell;
    const spells: Array<ISpell> = JSON.parse(localStorage.getItem('Spell'));

    if (!spells) {
      return;
    }

    const spellRemoved = spells.filter(function (droppedSpell) {
      return droppedSpell.name !== spell.name;
    });

    localStorage.setItem('Spell', JSON.stringify(spellRemoved));
    const retrievedSpell = JSON.parse(localStorage.getItem('Spell'));

    console.log(retrievedSpell);
  }

  useSpell() {
    const spell = this.spell;
    let spells: Array<ISpell> = JSON.parse(localStorage.getItem('Spell'));

    if (!spells) {
      spells = [];
    }

    const valueArr = spells.map(function (item) { return item.name });
    const isDuplicate = valueArr.some(function (item, idx) {
      return valueArr.indexOf(item) !== idx
    });

    if (!isDuplicate) {
      spells.push(spell);
    }

    localStorage.setItem('Spell', JSON.stringify(spells));

    const retrievedSpell = JSON.parse(localStorage.getItem('Spell'));

    console.log(retrievedSpell);
  }
}