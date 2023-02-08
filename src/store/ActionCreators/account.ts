import { ActionCreator, Dispatch } from 'redux';
import { UsersAPI } from '../../api';
import { AccountAPI } from '../../api/AccountAPI';
import { ThunkActionType } from '../../types';
import { AccountAction, AccountActionTypes } from '../../types/account';
import { updateProgress } from '../../utils';

export function setAccount(): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>) => {
    const { account } = await AccountAPI.getInfo();
    if (account) {
      const { username, avatar, trainedKatas, solvedKatas, starredKatas } = account;
      const { rank, honor, score } = await UsersAPI.getOne(username);
      dispatch({
        type: AccountActionTypes.SET_ACCOUNT,
        payload: { username, avatar, trainedKatas, solvedKatas, starredKatas, rank, honor, score },
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
    if (status && solvedKatas && trainedKatas) {
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

export function addToStarred(kataId: string, stars: number): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>, getState) => {
    const { starredKatas } = getState().account;
    const { status } = await AccountAPI.addStarredKata(kataId, stars);
    if (status && starredKatas) {
      if (!starredKatas.includes(kataId))
        dispatch({
          type: AccountActionTypes.ADD_TO_STARRED,
          payload: {
            starredKatas: [...starredKatas, kataId],
          },
        });
      else
        dispatch({
          type: AccountActionTypes.ADD_TO_STARRED,
          payload: {
            starredKatas: starredKatas.filter((id) => id !== kataId),
          },
        });
    }
  };
}

export function updateUserProgress(kataId: string, kataRank: string): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>, getState) => {
    const { username, rank, honor, score } = getState().account;
    console.log(username, rank, honor, score);
    if (username && rank && honor !== null && score !== null) {
      const { totalCompleted } = await UsersAPI.getOne(username);
      const updates = updateProgress(kataRank, honor, parseInt(rank), score);
      const { newScore, newHonor, newRank } = updates;

      const { status } = await UsersAPI.update(username, {
        totalCompleted: totalCompleted + 1,
        rank: newRank,
        honor: newHonor,
        score: newScore,
      });
      if (status) {
        dispatch({
          type: AccountActionTypes.UPDATE_USER_PROGRESS,
          payload: { rank: newRank, honor: newHonor, score: newScore },
        });
      }
    }
  };
}

export const signOutAccount: ActionCreator<AccountAction> = () => ({
  type: AccountActionTypes.SIGN_OUT_ACCOUNT,
});
