import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser/platform-browser';
import { SpellCardModule } from '../../components/spell-card-component/spell-card.module';
import { SpellListComponent } from '../spell-list/spell-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MdInputModule,
    SpellCardModule,
    MdFormFieldModule,
    MdButtonModule,
    MdCardModule,
    HttpModule
  ],
  declarations: [
    SpellListComponent
  ]
})

export class SpellListModule {

}
