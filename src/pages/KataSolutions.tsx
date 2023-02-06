import React from 'react';
import KataSolutionItem from '../components/Kata/kataSolutionItem';
import LeftBarForSolutions from '../components/Kata/leftBarForSolutions';
import TestCases from '../components/Kata/TestCases';

export const KataSolutions = () => {
  return (
    <>
      <div className="section _test-cases">
        <TestCases />
      </div>
      <div className="section solution-main">
        <LeftBarForSolutions sol={true} />
        <div className="results">
          <KataSolutionItem />
          <KataSolutionItem />
        </div>
      </div>
    </>
  );
};
