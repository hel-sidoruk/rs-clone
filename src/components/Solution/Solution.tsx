import React from 'react';
import { Code } from './Code';
import { CodeActionsButtons } from './CodeActionsButtons';

export const Solution = () => {
  return (
    <>
      <div className="solution">
        <div className="solution__top">
          <p className="solution__top-text">Solution</p>
        </div>
        <Code />
      </div>
      <CodeActionsButtons />
    </>
  );
};
