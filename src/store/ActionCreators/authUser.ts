import { Dispatch } from 'redux';
import { AccountAPI } from '../../api/AccountAPI';
import { ThunkActionType } from '../../types';
import { AuthUserAction, AuthUserActionTypes } from '../../types/authUser';

export function checkUser(): ThunkActionType {
  return async (dispatch: Dispatch<AuthUserAction>) => {
    const { username } = await AccountAPI.check();
    if (username)
      dispatch({
        type: AuthUserActionTypes.SET_USER_SUCCESS,
        payload: { isAuthorized: true, username },
      });
  };
}

export function signOut(): ThunkActionType {
  return (dispatch: Dispatch<AuthUserAction>) => {
    localStorage.removeItem('token');
    dispatch({ type: AuthUserActionTypes.SIGN_OUT });
  };
}

export const clearError = (): ThunkActionType => (dispatch: Dispatch<AuthUserAction>) =>
  dispatch({ type: AuthUserActionTypes.CLEAR_ERROR });

export function login(user: { username: string; password: string }): ThunkActionType {
  return async (dispatch: Dispatch<AuthUserAction>) => {
    dispatch({ type: AuthUserActionTypes.SET_USER });
    const { username, error } = await AccountAPI.login(user);
    if (username)
      dispatch({
        type: AuthUserActionTypes.SET_USER_SUCCESS,
        payload: { isAuthorized: true, username },
      });
    if (error) dispatch({ type: AuthUserActionTypes.AUTH_ERROR, payload: { authError: error } });
  };
}

export function registration(user: { username: string; password: string }): ThunkActionType {
  return async (dispatch: Dispatch<AuthUserAction>) => {
    dispatch({ type: AuthUserActionTypes.SET_USER });
    const { username, error } = await AccountAPI.registration(user);
    if (username)
      dispatch({
        type: AuthUserActionTypes.SET_USER_SUCCESS,
        payload: { isAuthorized: true, username },
      });

    if (error) dispatch({ type: AuthUserActionTypes.AUTH_ERROR, payload: { authError: error } });
  };
}

export function githubLogin(code: string): ThunkActionType {
  return async (dispatch: Dispatch<AuthUserAction>) => {
    dispatch({ type: AuthUserActionTypes.SET_USER });
    const { username, error } = await AccountAPI.githubLogin(code);
    if (username)
      dispatch({
        type: AuthUserActionTypes.SET_USER_SUCCESS,
        payload: { isAuthorized: true, username },
      });
    if (error) dispatch({ type: AuthUserActionTypes.AUTH_ERROR, payload: { authError: error } });
  };
}

export function githubRegistration(code: string): ThunkActionType {
  return async (dispatch: Dispatch<AuthUserAction>) => {
    dispatch({ type: AuthUserActionTypes.SET_USER });
    const { username, error } = await AccountAPI.githubRegistration(code);
    if (username)
      dispatch({
        type: AuthUserActionTypes.SET_USER_SUCCESS,
        payload: { isAuthorized: true, username },
      });
    if (error) dispatch({ type: AuthUserActionTypes.AUTH_ERROR, payload: { authError: error } });
  };
}
