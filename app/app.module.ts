import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule, MatChipsModule, MdProgressBarModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SpellListComponent } from './pages/spell-list/spell-list.component';
import { SpellCardComponent } from './components/spell-card-component/spell-card.component';
import { CompactSpellCardComponent } from './compact-cards/compact-spell-card/compact-spell-card.component';
import { MonsterListComponent } from './pages/monster-list/monster-list.component';
import { MonsterCardComponent } from './components/monster-card-component/monster-card.component';
import { PlayerDashboardComponent } from './pages/player-dashboard/player-dashboard.component';
import { routes } from './routes';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MonsterStatusCardComponent } from './components/monster-status-card/monster-status-card.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellListComponent,
    SpellCardComponent,
    CompactSpellCardComponent,
    MonsterListComponent,
    MonsterCardComponent,
    PlayerDashboardComponent,
    PlayerComponent,
    MonsterStatusCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MdInputModule,
    MdFormFieldModule,
    MatChipsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdProgressBarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
