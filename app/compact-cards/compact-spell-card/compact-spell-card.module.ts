import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser/platform-browser';
import { CompactSpellCardComponent } from '../compact-spell-card/compact-spell-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MdInputModule,
    MdFormFieldModule,
    MdButtonModule,
    MdCardModule,
    HttpModule
  ],
  declarations: [
    CompactSpellCardComponent
  ],
  exports: [
    CompactSpellCardComponent
  ]
})

export class CompactSpellCardModule {
}
