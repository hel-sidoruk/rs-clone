import { combineReducers } from 'redux';
import authUserReducer from './authUserReducer';
import kataReducer from './kataReducer';

export const rootReducer = combineReducers({
  katas: kataReducer,
  authorizedUser: authUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
