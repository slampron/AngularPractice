import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser/platform-browser';
import { SpellCardComponent } from '../spell-card-component/spell-card.component'


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
    SpellCardComponent
  ],
  exports: [
    SpellCardComponent
  ]
})

export class SpellCardModule {

}
