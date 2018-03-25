import { StartPageComponent } from './pages/start-page/start-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { PausePageComponent } from './pages/pause-page/pause-page.component';

export const appRoutes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartPageComponent },
  { path: 'game/:level', component: GamePageComponent },
  { path: 'pause', component: PausePageComponent },
];
