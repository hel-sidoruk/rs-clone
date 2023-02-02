export interface KataInterface {
  id: string;
  name: string;
  description: string;
  totalAttempts: number;
  totalCompleted: number;
  totalStars: number;
  slug: string;
  publishedAt: number;
  createdAt: number;
  rank: string;
  category: string;
  tags: string[];
  createdBy: string;
}

export interface KataState {
  katas: KataInterface[];
  katasByID: KatasById | null;
  loading: boolean;
  error: null | string;
}

export type KatasById = {
  [id: string]: KataInterface;
};

export enum KatasActionTypes {
  FETCH_KATAS = 'FETCH_KATAS',
  FETCH_KATAS_SUCCESS = 'FETCH_KATAS_SUCCESS',
  FETCH_KATAS_ERROR = 'FETCH_KATAS_ERROR',
}

interface FetchKatas {
  type: KatasActionTypes.FETCH_KATAS;
}

interface FetchKatasSuccess {
  type: KatasActionTypes.FETCH_KATAS_SUCCESS;
  payload: {
    katasByID: KatasById;
    katas: KataInterface[];
  };
}

interface FetchKatasError {
  type: KatasActionTypes.FETCH_KATAS_ERROR;
  payload: {
    error: string;
  };
}

export type KatasAction = FetchKatas | FetchKatasSuccess | FetchKatasError;
