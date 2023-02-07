export interface AccountInterface {
  id: string;
  username: string;
  password: string | null;
  avatar: string | null;
  github: string | null;
  solvedKatas: string[];
  trainedKatas: string[];
  starredKatas: string[];
}

export interface AccountState {
  username: string | null;
  avatar: string | null;
  solvedKatas: string[] | null;
  trainedKatas: string[] | null;
  starredKatas: string[] | null;
  rank: string | null;
  score: number | null;
  honor: number | null;
}

export enum AccountActionTypes {
  SET_ACCOUNT = 'SET_ACCOUNT',
  SIGN_OUT_ACCOUNT = 'SIGN_OUT_ACCOUNT',
  MARK_AS_TRAINED = 'MARK_AS_TRAINED',
  MARK_AS_SOLVED = 'MARK_AS_SOLVED',
  ADD_TO_STARRED = 'ADD_TO_STARRED',
  UPDATE_USER_PROGRESS = 'UPDATE_USER_PROGRESS',
}
interface SetAccount {
  type: AccountActionTypes.SET_ACCOUNT;
  payload: {
    username: string;
    avatar: string | null;
    solvedKatas: string[];
    trainedKatas: string[];
    starredKatas: string[];
    rank: string;
    honor: number;
    score: number;
  };
}
interface SignOut {
  type: AccountActionTypes.SIGN_OUT_ACCOUNT;
}
interface MarkAsTrained {
  type: AccountActionTypes.MARK_AS_TRAINED;
  payload: {
    trainedKatas: string[];
  };
}
interface MarkAsSolved {
  type: AccountActionTypes.MARK_AS_SOLVED;
  payload: {
    trainedKatas: string[];
    solvedKatas: string[];
  };
}
interface AddToStarred {
  type: AccountActionTypes.ADD_TO_STARRED;
  payload: {
    starredKatas: string[];
  };
}
interface UpdateUserProgress {
  type: AccountActionTypes.UPDATE_USER_PROGRESS;
  payload: {
    rank: string;
    score: number;
    honor: number;
  };
}
export type AccountAction =
  | SetAccount
  | SignOut
  | MarkAsTrained
  | MarkAsSolved
  | AddToStarred
  | UpdateUserProgress;
