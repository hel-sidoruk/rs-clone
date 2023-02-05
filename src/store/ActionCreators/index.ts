import * as KatasActionCreators from './katas';
import * as AuthUserActionCreators from './authUser';
import * as SolutionActionCreators from './solution';
import * as LeaderActionCreators from './leaders';

export default {
  ...KatasActionCreators,
  ...AuthUserActionCreators,
  ...SolutionActionCreators,
  ...LeaderActionCreators,
};
