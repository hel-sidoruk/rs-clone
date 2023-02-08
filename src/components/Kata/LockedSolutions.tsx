import React from 'react';
import useActions from '../../hooks/useActions';

export const LockedSolutions = ({ kataId }: { kataId: string }) => {
  const { addToForfeited } = useActions();

  return (
    <div className="section locked-solutions">
      <h3 className="locked-solutions__title">Solutions have been withheld</h3>
      <p className="locked-solutions__text">
        Since you have not yet solved this kata we have hidden the solutions from you. If you choose
        to view the solutions you will forfeit your eligibility to earn honor/rank progress for this
        kata.
      </p>
      <button className="btn btn-fill" onClick={() => addToForfeited(kataId)}>
        <i className="icon-moon icon-moon-unlock"></i>Unlock Solutions (forfeit eligibility)
      </button>
    </div>
  );
};
