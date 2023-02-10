import { Dispatch } from 'redux';
import { CommentsAPI } from '../../api';
import { ThunkActionType } from '../../types';
import { CommentLabel, CommentsAction, CommentsActionTypes } from '../../types/comments';

export function fetchComments(kataId: string): ThunkActionType {
  return async (dispatch: Dispatch<CommentsAction>) => {
    dispatch({ type: CommentsActionTypes.LOADING_COMMENTS });
    const comments = await CommentsAPI.getComments(kataId);
    dispatch({
      type: CommentsActionTypes.FETCH_COMMENTS,
      payload: { comments },
    });
  };
}

export function addComment(kataId: string, text: string, label: CommentLabel): ThunkActionType {
  return async (dispatch: Dispatch<CommentsAction>, getState) => {
    const { comments } = getState().comments;
    const { username, rank, avatar } = getState().account;
    if (!username || !rank || !avatar) return;
    dispatch({ type: CommentsActionTypes.LOADING_COMMENTS });
    const comment = await CommentsAPI.create(kataId, { username, rank, label, text, avatar });
    dispatch({
      type: CommentsActionTypes.FETCH_COMMENTS,
      payload: { comments: [...comments, comment] },
    });
  };
}
