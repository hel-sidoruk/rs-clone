export type CommentLabel = 'Question' | 'Suggestion' | 'Issue';

export interface CommentInterface {
  id: number;
  avatar: string;
  kataId: string;
  username: string;
  text: string;
  rank: string;
  votes: number;
  createdAt: string;
  spoiler: boolean;
  label: CommentLabel | null;
}

export interface CommentsState {
  comments: CommentInterface[];
  loading: boolean;
}

export enum CommentsActionTypes {
  LOADING_COMMENTS = 'LOADING_COMMENTS',
  FETCH_COMMENTS = 'FETCH_COMMENTS',
  ADD_COMMENT = 'ADD_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
}
interface LoadingComments {
  type: CommentsActionTypes.LOADING_COMMENTS;
}

interface CommentsActions {
  type:
    | CommentsActionTypes.FETCH_COMMENTS
    | CommentsActionTypes.ADD_COMMENT
    | CommentsActionTypes.DELETE_COMMENT;
  payload: {
    comments: CommentInterface[];
  };
}

export type CommentsAction = LoadingComments | CommentsActions;
