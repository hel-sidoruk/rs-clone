import { CommentsAction, CommentsActionTypes, CommentsState } from '../../types/comments';

const initialState: CommentsState = {
  comments: [],
  loading: false,
};

export const commentsReducer = (state = initialState, action: CommentsAction): CommentsState => {
  switch (action.type) {
    case CommentsActionTypes.LOADING_COMMENTS:
      return { ...state, loading: true };
    case CommentsActionTypes.FETCH_COMMENTS:
      return { ...state, comments: action.payload.comments, loading: false };
    case CommentsActionTypes.ADD_COMMENT:
      return { ...state, comments: action.payload.comments };
    default:
      return state;
  }
};
