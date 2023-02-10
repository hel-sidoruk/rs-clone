import * as KatasActionCreators from './katas';
import * as AuthUserActionCreators from './authUser';
import * as SolutionActionCreators from './solution';
import * as LeaderActionCreators from './leaders';
import * as AccountActionCreators from './account';
import * as FiltersActionCreators from './filters';

export default {
  ...KatasActionCreators,
  ...AuthUserActionCreators,
  ...SolutionActionCreators,
  ...LeaderActionCreators,
  ...AccountActionCreators,
  ...FiltersActionCreators,
};
