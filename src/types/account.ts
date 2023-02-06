export interface AccountInterface {
  id: string;
  username: string;
  password: string | null;
  avatar: string | null;
  github: string | null;
  solvedKatas: string[];
  trainedKatas: string[];
}

export interface AccountState {
  username: string | null;
  avatar: string | null;
  solvedKatas: string[] | null;
  trainedKatas: string[] | null;
}

export enum AccountActionTypes {
  SET_ACCOUNT = 'SET_ACCOUNT',
  SIGN_OUT_ACCOUNT = 'SIGN_OUT_ACCOUNT',
  MARK_AS_TRAINED = 'MARK_AS_TRAINED',
  MARK_AS_SOLVED = 'MARK_AS_SOLVED',
}
interface SetAccount {
  type: AccountActionTypes.SET_ACCOUNT;
  payload: {
    username: string;
    avatar: string | null;
    solvedKatas: string[];
    trainedKatas: string[];
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
export type AccountAction = SetAccount | SignOut | MarkAsTrained | MarkAsSolved;
