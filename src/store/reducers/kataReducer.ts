import { KatasAction, KatasActionTypes, KataState } from '../../types/kata';

const initialState: KataState = {
  katasByID: null,
  katas: [],
  starredKatasList: [],
  loading: false,
  error: null,
  totalCount: 0,
  page: 1,
  filters: '',
};

export default function kataReducer(state: KataState = initialState, action: KatasAction) {
  switch (action.type) {
    case KatasActionTypes.FETCH_KATAS:
      return { ...state, loading: true };
    case KatasActionTypes.FETCH_KATAS_SUCCESS:
      return {
        ...state,
        loading: false,
        katas: action.payload.katas,
        katasByID: action.payload.katasByID,
        totalCount: action.payload.totalCount,
        filters: action.payload.filters,
        page: 1,
      };
    case KatasActionTypes.FETCH_KATAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case KatasActionTypes.FETCH_NEXT_KATAS:
      return {
        ...state,
        loading: false,
        katas: action.payload.katas,
        katasByID: action.payload.katasByID,
        page: action.payload.page,
      };
    case KatasActionTypes.ADD_STARRED_KATA:
      return {
        ...state,
        starredKatasList: action.payload.starredKatasList,
      };
    default:
      return state;
  }
}
