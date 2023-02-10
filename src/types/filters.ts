export interface FiltersState {
  query: string;
}

export const SET_FILTERS = 'SET_FILTERS';

export interface SetFilters {
  type: typeof SET_FILTERS;
  payload: {
    filterType: string;
    filterValue: string;
  };
}
