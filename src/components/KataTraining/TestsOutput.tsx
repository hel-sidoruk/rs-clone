import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { useTesting } from '../../hooks/useTesting';
import useTypedSelector from '../../hooks/useTypedSelector';
import { OutputLine } from '../UI/OutputLine';
import { TestStats } from './TestStats';

const initialOutputState = 'Your results will be shown here';

export const TestsOutput = () => {
  const { isTestsStarted, success } = useTypedSelector((state) => state.solution);
  const [startTests, output, failure, stats] = useTesting();

  useEffect(() => {
    if (isTestsStarted) startTests();
  }, [isTestsStarted]);

  return (
    <div className={`tests ${success ? 'success' : failure ? 'failure' : ''}`}>
      {stats && <TestStats stats={stats} />}
      <div className="tests__output">
        <div className="tests__text">
          {!output && initialOutputState}
          {stats && <h2 className="tests__results">Test results: </h2>}
          {output.split('\n').map((line) => (
            <OutputLine key={nanoid()} line={line} />
          ))}
          {success && <div className="tests__congrats"> You have passed all of the tests! :) </div>}
        </div>
      </div>
    </div>
  );
};
