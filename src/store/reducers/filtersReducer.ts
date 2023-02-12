import { FiltersState, SetFilters, SET_FILTERS } from '../../types/filters';

const initialState: FiltersState = {
  query: '',
};

export default function filtersReducer(state = initialState, action: SetFilters) {
  switch (action.type) {
    case SET_FILTERS:
      return { ...state, query: action.payload.query };
    default:
      return state;
  }
}
