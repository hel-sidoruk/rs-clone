import { FiltersState, SetFilters, SET_FILTERS } from '../../types/filters';

const initialState: FiltersState = {
  query: '',
};

export default function filtersReducer(state = initialState, action: SetFilters) {
  switch (action.type) {
    case SET_FILTERS:
      const queries = state.query
        .split('&')
        .filter((item) => !item.includes(action.payload.filterType))
        .join('&');

      state.query = action.payload.filterValue
        ? `${queries}&${action.payload.filterType}=${action.payload.filterValue}`
        : queries;
      console.log(state);
      return state;
    default:
      return state;
  }
}
