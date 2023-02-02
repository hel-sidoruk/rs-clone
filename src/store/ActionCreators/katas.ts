import { Dispatch } from 'redux';
import { KataAPI } from '../../api';
import { ThunkActionType } from '../../types';
import { KatasAction, KatasActionTypes, KatasById } from '../../types/kata';

export function fetchKatas(): ThunkActionType {
  return async (dispatch: Dispatch<KatasAction>) => {
    try {
      dispatch({ type: KatasActionTypes.FETCH_KATAS });
      const data = await KataAPI.getAll();

      const katasByID: KatasById = {};

      data.forEach((el) => {
        katasByID[el.id] = el;
      });
      dispatch({
        type: KatasActionTypes.FETCH_KATAS_SUCCESS,
        payload: { katasByID, katas: data },
      });
    } catch (err) {
      dispatch({ type: KatasActionTypes.FETCH_KATAS_ERROR, payload: { error: 'Error' } });
    }
  };
}
