export interface NotificationInterface {
  id: string;
  username: string;
  text: string;
  createdAt: string;
}

export interface NotificationsState {
  notifications: NotificationInterface[];
  newItems: NotificationInterface[];
}

export enum NotificationsActionTypes {
  FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS',
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  REMOVE_FROM_NEW = 'REMOVE_FROM_NEW',
  DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
}

interface FetchNotifications {
  type: NotificationsActionTypes.FETCH_NOTIFICATIONS;
  payload: {
    notifications: NotificationInterface[];
  };
}

interface RemoveFromNew {
  type: NotificationsActionTypes.REMOVE_FROM_NEW;
  payload: {
    newItems: NotificationInterface[];
  };
}
interface AddNotification {
  type: NotificationsActionTypes.ADD_NOTIFICATION;
  payload: {
    notifications: NotificationInterface[];
    newItems: NotificationInterface[];
  };
}

interface DeleteNotification {
  type: NotificationsActionTypes.DELETE_NOTIFICATION;
  payload: {
    notifications: NotificationInterface[];
  };
}

export type NotificationsAction =
  | FetchNotifications
  | RemoveFromNew
  | AddNotification
  | DeleteNotification;
