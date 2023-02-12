import React from 'react';

interface Props {
  bestPractices: number;
  clever: number;
}

export const SolutionControls = ({ bestPractices, clever }: Props) => {
  return (
    <div className="bottom-things">
      <div className="best-practice">
        <i className="icon-moon-up icon-moon"></i>
        <div className="text">Best Practices</div>
        <div className="count">{bestPractices}</div>
      </div>
      <div className="best-practice">
        <i className="icon-moon-up icon-moon"></i>
        <div className="text">Clever</div>
        <div className="count">{clever}</div>
      </div>
    </div>
  );
};
