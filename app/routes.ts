import { Routes, UrlHandlingStrategy, UrlTree } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { SpellListComponent } from './pages/spell-list/spell-list.component';
import { SpellCardComponent } from './components/spell-card-component/spell-card.component';
import { MonsterListComponent } from './pages/monster-list/monster-list.component';
import { MonsterCardComponent } from './components/monster-card-component/monster-card.component';
import { PlayerDashboardComponent } from './pages/player-dashboard/player-dashboard.component';
import { CompactSpellCardComponent } from './compact-cards/compact-spell-card/compact-spell-card.component';
import { MonsterStatusCardComponent } from './components/monster-status-card/monster-status-card.component';
export class HybridUrlHandlingStrategy implements HybridUrlHandlingStrategy {
    shouldProcessUrl(url: UrlTree) {
        return url.toString().startsWith('/');
    }

    extract(url: UrlTree) {
        return url;
    }

    merge(url: UrlTree, whole: UrlTree) {
        return url;
    }
}

export const routes: Routes = [
    { path: 'player', component: PlayerComponent },
    { path: 'spell-list', component: SpellListComponent },
    { path: 'spell-card', component: SpellCardComponent },
    { path: 'compact-spell-card', component: CompactSpellCardComponent },
    { path: 'monster-list', component: MonsterListComponent },
    { path: 'monster-card', component: MonsterCardComponent },
    { path: 'monster-status-card', component: MonsterStatusCardComponent },
    { path: 'player-dashboard', component: PlayerDashboardComponent }
];
