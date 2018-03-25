import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page/start-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { PausePageComponent } from './pause-page/pause-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { StopPageComponent } from './stop-page/stop-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [StartPageComponent, GamePageComponent, PausePageComponent, SettingsPageComponent, StopPageComponent]
})
export class PagesModule { }
