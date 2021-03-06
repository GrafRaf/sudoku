import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { IAppState } from './model';
import { gameReducer } from './game-reducer';


// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = combineReducers<IAppState>({
  game: gameReducer,
  router: routerReducer
});
