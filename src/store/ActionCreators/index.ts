import * as KatasActionCreators from './katas';
import * as AuthUserActionCreators from './authUser';
import * as SolutionActionCreators from './solution';
import * as LeaderActionCreators from './leaders';
import * as AccountActionCreators from './account';
import * as NotificationsActionCreators from './notifications';
import * as CommentsActionCreators from './comments';

export default {
  ...KatasActionCreators,
  ...AuthUserActionCreators,
  ...SolutionActionCreators,
  ...LeaderActionCreators,
  ...AccountActionCreators,
  ...NotificationsActionCreators,
  ...CommentsActionCreators,
};
