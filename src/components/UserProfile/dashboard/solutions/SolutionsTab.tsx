import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UsersAPI } from '../../../../api';
import { initialUser } from '../../../../pages';

export const SolutionsTab = () => {
  const [opened, setOpened] = useState('completed');
  const [user, setUser] = useState(initialUser);
  const { id } = useParams();

  useEffect(() => {
    UsersAPI.getOne(id as string).then((data) => setUser(data));
  }, []);

  return (
    <div className="dashboard-wrapper solutions-tab">
      <div className="dashboard-wrapper__sidebar">
        <Link
          to={`/users/${user.username}/solutions`}
          className={opened === 'completed' ? '_opened' : ''}
          onClick={() => setOpened('completed')}
        >
          Completed
        </Link>
        <Link
          to={`/users/${user.username}/solutions`}
          className={opened === 'unfinished' ? '_opened' : ''}
          onClick={() => setOpened('unfinished')}
        >
          Unfinished
        </Link>
      </div>
      <div className="dashboard-wrapper__content">solutions-list</div>
    </div>
  );
};
