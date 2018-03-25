import { Action } from 'redux';
import { IGame } from './model';

const INITIAL_STATE: IGame = {
  level: 1
};

export function gameReducer(state: IGame = INITIAL_STATE, a: Action): IGame {
    return state;
}
