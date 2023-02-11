import { Dispatch } from 'react';
import { ThunkActionType } from '../../types';
import { SetFilters, SET_FILTERS } from '../../types/filters';

export function changeFilters(ftype: string, fvalue: string): ThunkActionType {
  return (dispatch: Dispatch<SetFilters>, getState) => {
    const { query } = getState().filters;
    if (!query) {
      dispatch({ type: SET_FILTERS, payload: { query: fvalue ? `?${ftype}=${fvalue}` : '' } });
      return;
    }
    const queries = query
      .slice(1)
      .split('&')
      .filter(Boolean)
      .filter((item) => !item.includes(ftype))
      .join('&');
    const newQuery = fvalue ? `?${ftype}=${fvalue}&${queries}` : queries ? `?${queries}` : '';
    dispatch({ type: SET_FILTERS, payload: { query: newQuery } });
  };
}
