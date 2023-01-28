import React from 'react';

export const CodeActionsButtons = () => {
  return (
    <div className="code__btns">
      <div className="code__btns-actions">
        <button className="btn btn-dark">skip</button>
        <button className="btn btn-dark">view solutions</button>
        <button className="btn btn-dark">discuss</button>
        <button className="btn btn-dark">reset</button>
      </div>
      <div className="code__btns-tests">
        <button className="btn">test</button>
        <button className="btn btn-fill">attempt</button>
      </div>
    </div>
  );
};
