import { Dispatch } from 'redux';
import { CommentsAPI } from '../../api';
import { ThunkActionType } from '../../types';
import { CommentLabel, CommentsAction, CommentsActionTypes } from '../../types/comments';

export function fetchComments(kataId: string, label?: CommentLabel): ThunkActionType {
  return async (dispatch: Dispatch<CommentsAction>, getState) => {
    const { totalCount } = getState().comments;
    dispatch({ type: CommentsActionTypes.LOADING_COMMENTS });
    const { rows, count } = await CommentsAPI.getComments(kataId, label);
    dispatch({
      type: CommentsActionTypes.FETCH_COMMENTS,
      payload: { comments: rows, totalCount: label ? totalCount : count },
    });
  };
}

export function addComment(
  kataId: string,
  text: string,
  label: CommentLabel | null
): ThunkActionType {
  return async (dispatch: Dispatch<CommentsAction>, getState) => {
    const { comments, totalCount } = getState().comments;
    const { username, rank, avatar } = getState().account;
    if (!username || !rank || !avatar) return;
    const comment = await CommentsAPI.create(kataId, { username, rank, label, text, avatar });
    dispatch({
      type: CommentsActionTypes.ADD_COMMENT,
      payload: { comments: [comment, ...comments], totalCount: totalCount + 1 },
    });
  };
}

export function deleteComment(kataId: string, commentId: number): ThunkActionType {
  return async (dispatch: Dispatch<CommentsAction>, getState) => {
    const { comments, totalCount } = getState().comments;
    const { status } = await CommentsAPI.delete(kataId, commentId);
    if (status) {
      dispatch({
        type: CommentsActionTypes.DELETE_COMMENT,
        payload: {
          comments: comments.filter((comment) => comment.id !== commentId),
          totalCount: totalCount - 1,
        },
      });
    }
  };
}

export function setUpdatingComment(commentId: number | null): ThunkActionType {
  return async (dispatch: Dispatch<CommentsAction>, getState) => {
    if (commentId === null) {
      dispatch({
        type: CommentsActionTypes.SET_UPDATING_COMMENT,
        payload: { updatingComment: null },
      });
      return;
    }
    const { comments } = getState().comments;
    const comment = comments.find((el) => el.id === commentId);
    if (comment) {
      dispatch({
        type: CommentsActionTypes.SET_UPDATING_COMMENT,
        payload: { updatingComment: comment },
      });
    }
  };
}

export function updateCommentText(
  kataId: string,
  commentId: number,
  label: CommentLabel | null,
  text: string
): ThunkActionType {
  return async (dispatch: Dispatch<CommentsAction>, getState) => {
    const { comments } = getState().comments;
    const { status } = await CommentsAPI.update(kataId, commentId, { label, text });
    const idx = comments.findIndex((el) => el.id === commentId);
    const comment = comments[idx];
    if (comment && status) {
      comment.label = label;
      comment.text = text;
      dispatch({
        type: CommentsActionTypes.UPDATE_COMMENT_TEXT,
        payload: { comments: [...comments.slice(0, idx), comment, ...comments.slice(idx + 1)] },
      });
    }
  };
}
