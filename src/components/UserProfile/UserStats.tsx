import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';

const UserStats = () => {
  const [openedTab, setOpenedTab] = useState('stats');
  const { username } = useTypedSelector((state) => state.authorizedUser);
  const { currentUser } = useTypedSelector((state) => state.user);
  const isAuth = currentUser && currentUser.username === username;

  return (
    <div className="user-profile__stats user-stats">
      <div className="user-stats__tabs">
        <Link
          to={`/users/${currentUser?.username}/stats`}
          className={`user-stats__tab${openedTab === 'stats' ? ' _opened-tab' : ''}`}
          onClick={() => setOpenedTab('stats')}
        >
          Stats
        </Link>
        <Link
          to={`/users/${currentUser?.username}/completed`}
          className={`user-stats__tab${openedTab === 'kata' ? ' _opened-tab' : ''}`}
          onClick={() => setOpenedTab('kata')}
        >
          Kata
        </Link>
        <Link
          to={`/users/${currentUser?.username}/collections`}
          className={`user-stats__tab${openedTab === 'collections' ? ' _opened-tab' : ''}`}
          onClick={() => setOpenedTab('collections')}
        >
          Collections
        </Link>
        <Link
          to={`/users/${currentUser?.username}/comments`}
          className={`user-stats__tab${openedTab === 'discourse' ? ' _opened-tab' : ''}`}
          onClick={() => setOpenedTab('discourse')}
        >
          Discourse
        </Link>
        <Link
          to={`/users/${currentUser?.username}/following`}
          className={`user-stats__tab${openedTab === 'social' ? ' _opened-tab' : ''}`}
          onClick={() => setOpenedTab('social')}
        >
          Social
        </Link>
      </div>
      <div className="user-stats__stats">
        <Outlet />
      </div>
    </div>
  );
};
export default UserStats;
