import { ActionCreator } from 'redux';
import { SolutionAction, UPDATE_SOLUTION } from '../reducers/solutionReducer';

export const updateSolution: ActionCreator<SolutionAction> = (solution: string) => ({
  type: UPDATE_SOLUTION,
  solution,
});
