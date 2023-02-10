import { Dispatch } from 'react';
import { ThunkActionType } from '../../types';
import { SetFilters, SET_FILTERS } from '../../types/filters';

export function changeFilters(ftype: string, fvalue: string): ThunkActionType {
  return (dispatch: Dispatch<SetFilters>) => {
    dispatch({
      type: SET_FILTERS,
      payload: {
        filterType: ftype,
        filterValue: fvalue,
      },
    });
  };
}
