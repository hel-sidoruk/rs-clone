import { combineReducers } from 'redux';
import authUserReducer from './authUserReducer';
import kataReducer from './kataReducer';
import { solutionReducer } from './solutionReducer';

export const rootReducer = combineReducers({
  katas: kataReducer,
  authorizedUser: authUserReducer,
  solution: solutionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
