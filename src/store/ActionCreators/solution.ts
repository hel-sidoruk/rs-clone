import { ActionCreator } from 'redux';
import { SolutionAction, SolutionActionsTypes } from '../reducers/solutionReducer';

export const updateSolution: ActionCreator<SolutionAction> = (solution: string) => ({
  type: SolutionActionsTypes.UPDATE_SOLUTION,
  solution,
});

export const startTesting: ActionCreator<SolutionAction> = () => ({
  type: SolutionActionsTypes.START_TESTS,
});

export const endTesting: ActionCreator<SolutionAction> = () => ({
  type: SolutionActionsTypes.END_TESTS,
});
