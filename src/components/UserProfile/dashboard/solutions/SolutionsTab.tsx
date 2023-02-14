import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SolutionsAPI } from '../../../../api/SolutionsAPI';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import { SolutionInterface } from '../../../../types';
import SolutionItem from './SolutionItem';

export const SolutionsTab = () => {
  const [opened, setOpened] = useState('completed');
  const { currentUser } = useTypedSelector((state) => state.user);
  const [solutions, setSolutions] = useState<SolutionInterface[] | undefined>([]);

  useEffect(() => {
    SolutionsAPI.getUserSolutions().then((res) => setSolutions(res.solutions));
  }, []);

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
      <div className="dashboard-wrapper__content">
        <div className="solutions-tab__list">
          {solutions && solutions.length
            ? solutions.map((solution) => (
                <SolutionItem key={solution.id} solution={solution}></SolutionItem>
              ))
            : 'No solutions found'}
        </div>
      </div>
    </div>
  );
};
