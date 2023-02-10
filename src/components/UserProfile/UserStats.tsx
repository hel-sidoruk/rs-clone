import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { StatsTab } from './dashboard';

const UserStats = () => {
  return (
    <div className="user-profile__stats user-stats">
      <div className="user-stats__tabs">
        <Link to={'/users/:id/stats'} className="user-stats__tab user-stats__tab_open">
          Stats
        </Link>
        <Link to={'/users/:id/completed'} className="user-stats__tab">
          Kata
        </Link>
        <Link to={'/users/:id/collections'} className="user-stats__tab">
          Collections
        </Link>
        <Link to={'/users/:id/comments'} className="user-stats__tab">
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
