import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser/platform-browser';
import { MonsterCardComponent } from '../monster-card-component/monster-card.component'


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
    MonsterCardComponent
  ],
  exports: [
    MonsterCardComponent
  ]
})

export class MonsterCardModule {

}
