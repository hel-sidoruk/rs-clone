import { Dispatch } from 'redux';
import { KataAPI } from '../../api';
import { ThunkActionType } from '../../types';
import { KatasAction, KatasActionTypes, KatasById } from '../../types/kata';

export function fetchKatas(): ThunkActionType {
  return async (dispatch: Dispatch<KatasAction>, getState) => {
    const { page } = getState().katas;
    try {
      dispatch({ type: KatasActionTypes.FETCH_KATAS });
      const { rows, count } = await KataAPI.getAll(page);

      const katasByID: KatasById = {};

      rows.forEach((el) => {
        katasByID[el.id] = el;
      });
      dispatch({
        type: KatasActionTypes.FETCH_KATAS_SUCCESS,
        payload: { katasByID, katas: rows, totalCount: count },
      });
    } catch (err) {
      dispatch({ type: KatasActionTypes.FETCH_KATAS_ERROR, payload: { error: 'Error' } });
    }
  };
}

export function fetchNextKatas(): ThunkActionType {
  return async (dispatch: Dispatch<KatasAction>, getState) => {
    const { page, katas, katasByID, totalCount } = getState().katas;
    if (page > totalCount / 10) return;
    const nextPage = page + 1;
    try {
      dispatch({ type: KatasActionTypes.FETCH_KATAS });
      const { rows } = await KataAPI.getAll(nextPage);

      const katasById: KatasById = {};

      rows.forEach((el) => {
        katasById[el.id] = el;
      });
      dispatch({
        type: KatasActionTypes.FETCH_NEXT_KATAS,
        payload: {
          katasByID: { ...katasByID, ...katasById },
          katas: [...katas, ...rows],
          page: nextPage,
        },
      });
    } catch (err) {
      dispatch({ type: KatasActionTypes.FETCH_KATAS_ERROR, payload: { error: 'Error' } });
    }
  };
}
