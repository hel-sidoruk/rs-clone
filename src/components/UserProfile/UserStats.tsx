import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserStats = () => {
  const [openedTab, setOpenedTab] = useState('stats');

  return (
    <div className="user-profile__stats user-stats">
      <div className="user-stats__tabs">
        <Link
          to={'/users/:id/stats'}
          className={`user-stats__tab${openedTab === 'stats' ? ' _opened-tab' : ''}`}
          onClick={() => setOpenedTab('stats')}
        >
          Stats
        </Link>
        <Link
          to={'/users/:id/completed'}
          className={`user-stats__tab${openedTab === 'kata' ? ' _opened-tab' : ''}`}
          onClick={() => setOpenedTab('kata')}
        >
          Kata
        </Link>
        <Link
          to={'/users/:id/collections'}
          className={`user-stats__tab${openedTab === 'collections' ? ' _opened-tab' : ''}`}
          onClick={() => setOpenedTab('collections')}
        >
          Collections
        </Link>
        <Link
          to={'/users/:id/comments'}
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
