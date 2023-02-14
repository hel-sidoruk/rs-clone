import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import FollowItem from './FollowItem';

export const SocialTab = () => {
  const [opened, setOpened] = useState('completed');
  const { currentUser, following } = useTypedSelector((state) => state.user);

  return (
    <div className="dashboard-wrapper social">
      <div className="dashboard-wrapper__sidebar">
        <Link
          to={`/users/${currentUser?.username}/social`}
          className={opened === 'completed' ? '_opened' : ''}
          onClick={() => setOpened('completed')}
        >
          Following ({following.length})
        </Link>
        <Link
          to={`/users/${currentUser?.username}/social`}
          className={opened === 'authored' ? '_opened' : ''}
          onClick={() => setOpened('authored')}
        >
          Followers
        </Link>
      </div>
      <div className="dashboard-wrapper__content">
        <div className="follow-list">
          {following.map((item) => (
            <FollowItem key={item.id} user={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
