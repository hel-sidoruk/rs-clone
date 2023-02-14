import { Dispatch } from 'react';
import { UsersAPI } from '../../api';
import { ThunkActionType } from '../../types';
import { UserAction, UserActionTypes } from '../../types/user';

export function setCurrentUser(id: string): ThunkActionType {
  return async (dispatch: Dispatch<UserAction>) => {
    const currentUser = await UsersAPI.getOne(id);
    dispatch({ type: UserActionTypes.SET_CURRENT_USER, payload: { currentUser } });
  };
}
