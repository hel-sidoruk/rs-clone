import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store/reducers';

export type ThunkActionType = ThunkAction<void, RootState, unknown, Action<string>>;

export interface TestsStats {
  duration: number;
  failures: number;
  passes: number;
  pending: number;
  tests: number;
}

export interface AccountInterface {
  id: string;
  username: string;
  password: string | null;
  avatar: string | null;
  github: string | null;
  solvedKatas: string[];
  trainedKatas: string[];
}

export interface SolutionInterface {
  id: string;
  kataId: string;
  username: string;
  solution: string;
  createdAt: string;
  cleverVotes: number;
  bestPracticesVotes: number;
}
