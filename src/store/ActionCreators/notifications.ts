import { Dispatch } from 'redux';
import { ThunkActionType } from '../../types';
import { NotificationsAction, NotificationsActionTypes } from '../../types/notifications';

export function fetchNotifications(): ThunkActionType {
  return async (dispatch: Dispatch<NotificationsAction>) => {
    dispatch({
      type: NotificationsActionTypes.FETCH_NOTIFICATIONS,
      payload: { notifications: [] },
    });
  };
}

export function removeFromNew(): ThunkActionType {
  return async (dispatch: Dispatch<NotificationsAction>) => {
    dispatch({ type: NotificationsActionTypes.REMOVE_FROM_NEW, payload: { newItems: [] } });
  };
}
export function addNotification(): ThunkActionType {
  return async (dispatch: Dispatch<NotificationsAction>) => {
    dispatch({
      type: NotificationsActionTypes.ADD_NOTIFICATION,
      payload: { newItems: [], notifications: [] },
    });
  };
}

export function deleteNotification(): ThunkActionType {
  return async (dispatch: Dispatch<NotificationsAction>) => {
    dispatch({
      type: NotificationsActionTypes.DELETE_NOTIFICATION,
      payload: { notifications: [] },
    });
  };
}
