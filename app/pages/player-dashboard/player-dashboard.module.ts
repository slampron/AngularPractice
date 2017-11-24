import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule, MatChipsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser/platform-browser';
import { PlayerDashboardComponent } from '../player-dashboard/player-dashboard.component';
import {MonsterStatusCardComponent} from '../../components/monster-status-card/monster-status-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MatChipsModule
  ],
  declarations: [
    PlayerDashboardComponent
  ]
})

export class PlayerDashboardModule {

}
