import { KatasAction, KatasActionTypes, KataState } from '../../types/kata';

const initialState: KataState = {
  katas: null,
  loading: false,
  error: null,
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
      };
    case KatasActionTypes.FETCH_KATAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
