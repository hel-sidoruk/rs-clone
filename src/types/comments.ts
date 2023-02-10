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
}
interface LoadingComments {
  type: CommentsActionTypes.LOADING_COMMENTS;
}

interface FetchComments {
  type: CommentsActionTypes.FETCH_COMMENTS;
  payload: {
    comments: CommentInterface[];
  };
}
interface AddComment {
  type: CommentsActionTypes.ADD_COMMENT;
  payload: {
    comments: CommentInterface[];
  };
}
export type CommentsAction = LoadingComments | FetchComments | AddComment;
