const initialState: SolutionState = {
  solution: '',
};
export interface SolutionState {
  solution: string;
}

export const UPDATE_SOLUTION = 'UPDATE_SOLUTION';

export interface SolutionAction {
  type: typeof UPDATE_SOLUTION;
  solution: string;
}

export const solutionReducer = (state = initialState, action: SolutionAction): SolutionState => {
  switch (action.type) {
    case UPDATE_SOLUTION:
      return { ...state, solution: action.solution };
    default:
      return state;
  }
};
