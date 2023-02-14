import { Dispatch } from 'react';
import { UsersAPI } from '../../api';
import { FollowersAPI } from '../../api/FollowersAPI';
import { ThunkActionType } from '../../types';
import { UserAction, UserActionTypes } from '../../types/user';

export function setCurrentUser(id: string): ThunkActionType {
  return async (dispatch: Dispatch<UserAction>) => {
    const currentUser = await UsersAPI.getOne(id);
    const following = await FollowersAPI.getFollowing(id);
    const followers = await FollowersAPI.getFollowers(id);
    dispatch({
      type: UserActionTypes.SET_CURRENT_USER,
      payload: { currentUser, following, followers },
    });
  };
}
