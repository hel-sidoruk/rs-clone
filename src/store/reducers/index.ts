import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import authUserReducer from './authUserReducer';
import kataReducer from './kataReducer';
import leaderReducer from './leadersReducer';
import { notificationsReducer } from './notificationsReducer';
import { solutionReducer } from './solutionReducer';

export const rootReducer = combineReducers({
  katas: kataReducer,
  authorizedUser: authUserReducer,
  solution: solutionReducer,
  leaders: leaderReducer,
  account: accountReducer,
  notifications: notificationsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
