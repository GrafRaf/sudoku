import { routerReducer } from '@angular-redux/router';

export interface IGame {
  level: number;
}

export interface IAppState {
  // game: IGame;
  router: any; // routerReducer;
}
