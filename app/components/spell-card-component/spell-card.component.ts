import { Component, Input } from '@angular/core';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SpellService } from '../../services/spell.service';
import { ISpell } from '../../models/spell';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.css']
})

export class SpellCardComponent {
  @Input() spell: ISpell;
  @Input() savedSpell: ISpell;
  constructor(private spellService: SpellService) {
  }

  dropSpell() {
    this.spellService.dropSpell(this.spell);
  }

  useSpell() {
    this.spellService.saveSpell(this.spell);
  }
}
