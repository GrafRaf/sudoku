import { StartPageComponent } from './pages/start-page/start-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { PausePageComponent } from './pages/pause-page/pause-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { StopPageComponent } from './pages/stop-page/stop-page.component';

export const appRoutes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartPageComponent },
  { path: 'game/:level', component: GamePageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'pause', component: PausePageComponent },
  { path: 'stop', component: StopPageComponent },
];
