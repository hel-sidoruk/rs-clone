import { ActionCreator, Dispatch } from 'redux';
import { AccountAPI } from '../../api/AccountAPI';
import { ThunkActionType } from '../../types';
import { AccountAction, AccountActionTypes } from '../../types/account';

export function setAccount(): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>) => {
    const { account } = await AccountAPI.getInfo();
    if (account) {
      const { username, avatar, trainedKatas, solvedKatas } = account;
      dispatch({
        type: AccountActionTypes.SET_ACCOUNT,
        payload: { username, avatar, trainedKatas, solvedKatas },
      });
    }
  };
}

export function markAsTrained(kataId: string): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>, getState) => {
    const { trainedKatas } = getState().account;
    const { status } = await AccountAPI.addTrainedKata(kataId);
    if (status && trainedKatas && !trainedKatas.includes(kataId)) {
      dispatch({
        type: AccountActionTypes.MARK_AS_TRAINED,
        payload: { trainedKatas: [...trainedKatas, kataId] },
      });
    }
  };
}

export function markAsSolved(kataId: string): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>, getState) => {
    const { solvedKatas, trainedKatas } = getState().account;
    const { status } = await AccountAPI.addSolvedKata(kataId);
    if (status && solvedKatas && trainedKatas && !solvedKatas.includes(kataId)) {
      dispatch({
        type: AccountActionTypes.MARK_AS_SOLVED,
        payload: {
          solvedKatas: [...solvedKatas, kataId],
          trainedKatas: trainedKatas.filter((id) => id !== kataId),
        },
      });
    }
  };
}

export const signOutAccount: ActionCreator<AccountAction> = () => ({
  type: AccountActionTypes.SIGN_OUT_ACCOUNT,
});
