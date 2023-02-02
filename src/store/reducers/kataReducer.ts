import { KatasAction, KatasActionTypes, KataState } from '../../types/kata';

const initialState: KataState = {
  katasByID: null,
  katas: [],
  loading: false,
  error: null,
  totalCount: 0,
  page: 1,
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
        katas: action.payload.katas,
        katasByID: action.payload.katasByID,
        page: action.payload.page,
      };
    default:
      return state;
  }
}
