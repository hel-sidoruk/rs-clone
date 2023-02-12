import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const KataTab = () => {
  const [opened, setOpened] = useState('completed');
  return (
    <div className="dashboard-wrapper kata-tab">
      <div className="dashboard-wrapper__sidebar">
        <Link
          to="/users/:id/completed"
          className={opened === 'completed' ? '_opened' : ''}
          onClick={() => setOpened('completed')}
        >
          Completed
        </Link>
        <Link
          to="/users/:id/authored"
          className={opened === 'authored' ? '_opened' : ''}
          onClick={() => setOpened('authored')}
        >
          Authored
        </Link>
      </div>
      <div className="dashboard-wrapper__content">kata-list</div>
    </div>
  );
};
