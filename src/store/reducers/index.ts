import { combineReducers } from 'redux';
import kataReducer from './kataReducer';

export const rootReducer = combineReducers({
  katas: kataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
