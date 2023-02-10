import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import authUserReducer from './authUserReducer';
import kataReducer from './kataReducer';
import leaderReducer from './leadersReducer';
import { solutionReducer } from './solutionReducer';
import filtersReducer from './filtersReducer';

export const rootReducer = combineReducers({
  katas: kataReducer,
  authorizedUser: authUserReducer,
  solution: solutionReducer,
  leaders: leaderReducer,
  account: accountReducer,
  filters: filtersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
