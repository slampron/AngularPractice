import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable, OnChanges } from '@angular/core';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SpellService } from '../../services/spell.service';

import { ISpell, ISpellLevel } from '../../models/spell';
import { Observable } from 'rxjs/Observable';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'spell-list',
    templateUrl: './spell-list.component.html',
    styleUrls: ['./spell-list.component.css'],
    providers: [SpellService]
})

@Injectable()
export class SpellListComponent implements OnInit {

    spellResponse: ISpell = null;
    spells: ISpell[] = [];
    spellNumbers: ISpellLevel[] = [];
    savedSpell: ISpell[] = [];

    constructor(private http: Http, private spellService: SpellService) {
    }

    ngOnInit() {
        this.spellNumbers = this.spellService.spellList().filter(x => x.level === 1);
        this.savedSpell = JSON.parse(localStorage.getItem('Spell'));

        for (const spellNumber of this.spellNumbers) {
            this.spellService.getSpell(spellNumber.index)
                .subscribe(response => {
                    for (const saved of this.savedSpell) {
                        if (saved.index === spellNumber.index) {
                            response.saved = true;
                        }
                    }
                    this.spellResponse = response
                    this.spells.push(this.spellResponse);
                });
        }
    }
}
