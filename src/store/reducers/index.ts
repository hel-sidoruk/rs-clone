import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import authUserReducer from './authUserReducer';
import kataReducer from './kataReducer';
import leaderReducer from './leadersReducer';
import { solutionReducer } from './solutionReducer';

export const rootReducer = combineReducers({
  katas: kataReducer,
  authorizedUser: authUserReducer,
  solution: solutionReducer,
  leaders: leaderReducer,
  account: accountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
