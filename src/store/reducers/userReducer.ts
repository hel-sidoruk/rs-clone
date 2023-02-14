import { UserAction, UserActionTypes, UserState } from '../../types/user';

const initialState: UserState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload.currentUser };
    default:
      return state;
  }
};
