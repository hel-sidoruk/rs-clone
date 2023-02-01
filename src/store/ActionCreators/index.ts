import * as KatasActionCreators from './katas';
import * as AuthUserActionCreators from './authUser';

export default {
  ...KatasActionCreators,
  ...AuthUserActionCreators,
};
