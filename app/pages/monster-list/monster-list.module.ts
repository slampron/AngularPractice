import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser/platform-browser';
import { MonsterListComponent } from '../monster-list/monster-list.component';
import { MonsterCardModule } from '../../components/monster-card-component/monster-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MdInputModule,
    MonsterCardModule,
    MdFormFieldModule,
    MdButtonModule,
    MdCardModule
  ],
  declarations: [
    MonsterListComponent
  ]
})

export class MonsterListModule {

}
