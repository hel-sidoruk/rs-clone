import React from 'react';
import { Link } from 'react-router-dom';
import { NotificationInterface } from '../../types/notifications';
import { Rank } from '../Kata/Rank';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useActions from '../../hooks/useActions';

dayjs.extend(relativeTime);

export const Notification = ({ user, item }: { user: string; item: NotificationInterface }) => {
  const rank = item.text.match(/\d kyu/);
  const { deleteNotification } = useActions();

  return (
    <li className="notification header__menu-item">
      <div className="notification__top">
        {rank && <Rank rank={rank[0]} />}
        <Link className="link" to={`/users/${user}`}>
          {item.text}
        </Link>
      </div>
      <div className="notification__bottom">
        <div>{dayjs(item.createdAt).fromNow()}</div>
        <button className="btn btn-dark" onClick={() => deleteNotification(item.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
