import React, { useEffect, useState } from 'react';
import KataSolutionItem from '../components/Kata/kataSolutionItem';
import LeftBarForSolutions from '../components/Kata/leftBarForSolutions';
import { SolutionsAPI } from '../api/SolutionsAPI';
import { useParams } from 'react-router';
import { SolutionInterface } from '../types';
import { nanoid } from 'nanoid';

export const KataSolutions = () => {
  const { id } = useParams();
  const [solutions, setSolutions] = useState<SolutionInterface[]>([]);

  useEffect(() => {
    if (id) SolutionsAPI.getSolutions(id).then((res) => setSolutions(res));
  }, []);

  return (
    <div className="section solution-main">
      <LeftBarForSolutions sol />
      <div>
        {solutions.length ? (
          solutions.map((item) => <KataSolutionItem solution={item} key={nanoid()} />)
        ) : (
          <div className="section locked-solutions">
            <h3 className="locked-solutions__title">Solutions have been withheld</h3>
            <p className="locked-solutions__text">
              Since you have not yet solved this kata we have hidden the solutions from you. If you
              choose to view the solutions you will forfeit your eligibility to earn honor/rank
              progress for this kata.
            </p>
            <button className="btn btn-fill">
              <i className="icon-moon icon-moon-unlock"></i>Unlock Solutions (forfeit eligibility)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
