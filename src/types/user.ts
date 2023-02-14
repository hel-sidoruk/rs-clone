export interface UserInterface {
  id: string;
  name: string | null;
  leaderboardPosition: number;
  username: string;
  honor: number;
  clan: string;
  totalCompleted: number;
  rank: string;
  score: number;
}

export interface UserState {
  currentUser: UserInterface | null;
}

export enum UserActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

interface SetUserAction {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: {
    currentUser: UserInterface;
  };
}

export type UserAction = SetUserAction;
