import { Dispatch } from 'redux';
import { KataAPI } from '../../api';
import { ThunkActionType } from '../../types';
import { KatasAction, KatasActionTypes, KatasById } from '../../types/kata';

export function fetchKatas(): ThunkActionType {
  return async (dispatch: Dispatch<KatasAction>) => {
    try {
      dispatch({ type: KatasActionTypes.FETCH_KATAS });
      const data = await KataAPI.getAll();

      const katasById: KatasById = {};

      data.forEach((el) => {
        katasById[el.id] = el;
      });
      dispatch({
        type: KatasActionTypes.FETCH_KATAS_SUCCESS,
        payload: { katas: katasById },
      });
    } catch (err) {
      dispatch({ type: KatasActionTypes.FETCH_KATAS_ERROR, payload: { error: 'Error' } });
    }
  };
}
