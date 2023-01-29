import React from 'react';
import { Link } from 'react-router-dom';

export const CodeActionsButtons = () => {
  return (
    <div className="code__btns">
      <div className="code__btns-actions">
        <Link to="/kata/2/train" className="btn btn-dark">
          skip
        </Link>
        <Link to="/kata/1/solutions" className="btn btn-dark">
          view solutions
        </Link>
        <Link to="/kata/1/discuss" className="btn btn-dark">
          discuss
        </Link>
        <button className="btn btn-dark">reset</button>
      </div>
      <div className="code__btns-tests">
        <button className="btn">test</button>
        <button className="btn btn-fill">attempt</button>
      </div>
    </div>
  );
};
