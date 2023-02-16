import { ActionCreator, Dispatch } from 'redux';
import { UsersAPI } from '../../api';
import { AccountAPI } from '../../api/AccountAPI';
import { ThunkActionType } from '../../types';
import { AccountAction, AccountActionTypes } from '../../types/account';

export function setAccount(): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>) => {
    const { account } = await AccountAPI.getInfo();
    if (account) {
      const { username, trainedKatas, solvedKatas, starredKatas, forfeitedKatas } = account;
      const { rank, honor, score, avatar } = await UsersAPI.getOne(username);
      dispatch({
        type: AccountActionTypes.SET_ACCOUNT,
        payload: {
          username,
          avatar,
          trainedKatas,
          solvedKatas,
          starredKatas,
          rank,
          honor,
          score,
          forfeitedKatas,
        },
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

export function addToForfeited(kataId: string): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>, getState) => {
    const { forfeitedKatas } = getState().account;
    if (forfeitedKatas?.includes(kataId)) return;
    const { status } = await AccountAPI.addForfeitedKata(kataId);

    if (status && forfeitedKatas) {
      dispatch({
        type: AccountActionTypes.ADD_TO_FORFEITED,
        payload: {
          forfeitedKatas: [...forfeitedKatas, kataId],
        },
      });
    }
  };
}

export function updateUserProgress(
  score: number,
  honor: number,
  newRank?: string
): ThunkActionType {
  return async (dispatch: Dispatch<AccountAction>, getState) => {
    const { username, rank } = getState().account;
    if (username && rank) {
      const { totalCompleted } = await UsersAPI.getOne(username);
      const count = totalCompleted + 1;
      const updates = newRank
        ? {
            totalCompleted: count,
            rank: newRank,
            honor,
            score,
          }
        : { totalCompleted: count, honor, score };
      const { status } = await UsersAPI.update(username, updates);
      if (status) {
        dispatch({
          type: AccountActionTypes.UPDATE_USER_PROGRESS,
          payload: { rank: newRank ? newRank : rank, honor, score },
        });
      }
    }
  };
}

export const signOutAccount: ActionCreator<AccountAction> = () => ({
  type: AccountActionTypes.SIGN_OUT_ACCOUNT,
});
