import { AccountAction, AccountActionTypes, AccountState } from '../../types/account';

const initialState: AccountState = {
  username: null,
  avatar: null,
  solvedKatas: null,
  trainedKatas: null,
};

export default function accountReducer(state: AccountState = initialState, action: AccountAction) {
  switch (action.type) {
    case AccountActionTypes.SET_ACCOUNT:
      return {
        ...state,
        username: action.payload.username,
        avatar: action.payload.avatar,
        solvedKatas: action.payload.solvedKatas,
        trainedKatas: action.payload.trainedKatas,
      };
    case AccountActionTypes.SIGN_OUT_ACCOUNT:
      return {
        ...state,
        username: null,
        avatar: null,
        solvedKatas: null,
      };
    case AccountActionTypes.MARK_AS_TRAINED:
      return {
        ...state,
        trainedKatas: action.payload.trainedKatas,
      };
    case AccountActionTypes.MARK_AS_SOLVED:
      return {
        ...state,
        trainedKatas: action.payload.trainedKatas,
        solvedKatas: action.payload.solvedKatas,
      };
    default:
      return state;
  }
}
