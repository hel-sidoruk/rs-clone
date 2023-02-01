import React from 'react';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

export const CodeActionsButtons = () => {
  const { solution } = useTypedSelector((state) => state.solution);
  const { startTesting } = useActions();
  const startTests = () => {
    startTesting();
    console.log(solution);
  };
  return (
    <div className="code__btns">
      <div className="code__btns-actions">
        <Link to="/kata/2/train" className="btn btn-dark">
          <i className="icon-moon icon-moon-next"></i>
          <span className="btn-text">skip</span>
        </Link>
        <Link to="/kata/1/solutions" className="btn btn-dark">
          <i className="icon-moon icon-moon-compare"></i>
          <span className="btn-text">view solutions</span>
        </Link>
        <Link to="/kata/1/discuss" className="btn btn-dark">
          <i className="icon-moon icon-moon-comments"></i>
          <span className="btn-text">discuss</span>
        </Link>
        <button className="btn btn-dark">reset</button>
      </div>
      <div className="code__btns-tests">
        <button className="btn" onClick={startTests}>
          test
        </button>
        <button className="btn btn-fill">attempt</button>
      </div>
    </div>
  );
};
