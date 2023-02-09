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
  initialSolution: string;
}

export interface KataState {
  katas: KataInterface[];
  katasByID: KatasById | null;
  loading: boolean;
  error: null | string;
  totalCount: number;
  page: number;
}

export type KatasById = {
  [id: string]: KataInterface;
};

export enum KatasActionTypes {
  FETCH_KATAS = 'FETCH_KATAS',
  FETCH_KATAS_SUCCESS = 'FETCH_KATAS_SUCCESS',
  FETCH_KATAS_ERROR = 'FETCH_KATAS_ERROR',
  FETCH_NEXT_KATAS = 'FETCH_NEXT_KATAS',
}

interface FetchKatas {
  type: KatasActionTypes.FETCH_KATAS;
}

interface FetchKatasSuccess {
  type: KatasActionTypes.FETCH_KATAS_SUCCESS;
  payload: {
    katasByID: KatasById;
    katas: KataInterface[];
    totalCount: number;
  };
}

interface FetchKatasError {
  type: KatasActionTypes.FETCH_KATAS_ERROR;
  payload: {
    error: string;
  };
}

interface FetchNextKatas {
  type: KatasActionTypes.FETCH_NEXT_KATAS;
  payload: {
    katasByID: KatasById;
    katas: KataInterface[];
    page: number;
  };
}
export type KatasAction = FetchKatas | FetchKatasSuccess | FetchKatasError | FetchNextKatas;
