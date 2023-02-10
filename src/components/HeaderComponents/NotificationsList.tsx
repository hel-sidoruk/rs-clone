import { nanoid } from 'nanoid';
import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Notification } from './Notification';

export const NotificationsList = () => {
  const { notifications } = useTypedSelector((state) => state.notifications);
  const { username } = useTypedSelector((state) => state.account);

  return (
    <div className="header__menu notifications-menu">
      <div className="header__menu-body">
        <ul>
          {notifications.length ? (
            notifications.map((note) => (
              <Notification key={nanoid()} user={username as string} item={note} />
            ))
          ) : (
            <li className="header__menu-item">You don&apos;t have any notifications yet</li>
          )}
        </ul>
      </div>
    </div>
  );
};
