import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserInterface } from '../../types/user';

const UserStats = ({ user }: { user: UserInterface }) => {
  const [openedTab, setOpenedTab] = useState('stats');

  return (
    <div className="user-profile__stats user-stats">
      <div className="user-stats__tabs">
        <Link
          to={`/users/${user.username}/stats`}
          className={`user-stats__tab${openedTab === 'stats' ? ' _opened-tab' : ''}`}
          onClick={() => setOpenedTab('stats')}
        >
          Stats
        </Link>
        <Link
          to={`/users/${user.username}/completed`}
          className={`user-stats__tab${openedTab === 'kata' ? ' _opened-tab' : ''}`}
          onClick={() => setOpenedTab('kata')}
        >
          Kata
        </Link>
        <Link
          to={`/users/${user.username}/collections`}
          className={`user-stats__tab${openedTab === 'collections' ? ' _opened-tab' : ''}`}
          onClick={() => setOpenedTab('collections')}
        >
          Collections
        </Link>
        <Link
          to={`/users/${user.username}/comments`}
          className={`user-stats__tab${openedTab === 'discourse' ? ' _opened-tab' : ''}`}
          onClick={() => setOpenedTab('discourse')}
        >
          Discourse
        </Link>
      </div>
      <div className="user-stats__stats">
        <Outlet />
      </div>
    </div>
  );
};
export default UserStats;
