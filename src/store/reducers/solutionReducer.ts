const initialState: SolutionState = {
  solution: '',
  isTestsStarted: false,
};
export interface SolutionState {
  solution: string;
  isTestsStarted: boolean;
}

export enum SolutionActionsTypes {
  UPDATE_SOLUTION = 'UPDATE_SOLUTION',
  START_TESTS = 'START_TESTS',
}

interface UpdateSolutionAction {
  type: SolutionActionsTypes.UPDATE_SOLUTION;
  solution: string;
}
interface StartTestingAction {
  type: SolutionActionsTypes.START_TESTS;
}

export type SolutionAction = UpdateSolutionAction | StartTestingAction;

export const solutionReducer = (state = initialState, action: SolutionAction): SolutionState => {
  switch (action.type) {
    case SolutionActionsTypes.UPDATE_SOLUTION:
      return { ...state, solution: action.solution };
    case SolutionActionsTypes.START_TESTS:
      return { ...state, isTestsStarted: true };
    default:
      return state;
  }
};
