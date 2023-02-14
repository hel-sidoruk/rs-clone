import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SolutionsAPI } from '../../../../api/SolutionsAPI';
import useTypedSelector from '../../../../hooks/useTypedSelector';

export const SolutionsTab = () => {
  const [opened, setOpened] = useState('completed');
  const { currentUser } = useTypedSelector((state) => state.user);

  useEffect(() => {
    SolutionsAPI.getUserSolutions();
  });

  return (
    <div className="dashboard-wrapper solutions-tab">
      <div className="dashboard-wrapper__sidebar">
        <Link
          to={`/users/${currentUser?.username}/solutions`}
          className={opened === 'completed' ? '_opened' : ''}
          onClick={() => setOpened('completed')}
        >
          Completed
        </Link>
        <Link
          to={`/users/${currentUser?.username}/solutions`}
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
