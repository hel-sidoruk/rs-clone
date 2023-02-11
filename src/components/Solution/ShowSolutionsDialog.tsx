import React from 'react';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/useActions';

export const ShowSolutionsDialog = ({ id }: { id: string }) => {
  const { addToForfeited } = useActions();
  const handleClick = () => addToForfeited(id);

  return (
    <div className="modal__content">
      <div className="modal__header">
        <h4>Unlock Solutions</h4>
        <button>
          <i className="icon-moon icon-moon-x"></i>
        </button>
      </div>
      <div className="modal__body">
        This will cause you to forfeit your ability to earn honor/rank for this kata. Are you sure?
      </div>
      <div className="modal__footer">
        <button className="btn btn-fill">Cancel</button>
        <Link to={`/kata/${id}/solutions`} onClick={handleClick} className="btn success">
          Yes, show me the solutions
        </Link>
      </div>
    </div>
  );
};
