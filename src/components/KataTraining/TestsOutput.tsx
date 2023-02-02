import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { TestsStats } from '../../types';
import { WS_URL } from '../../utils';
import { OutputLine } from '../UI/OutputLine';
import { TestStats } from './TestStats';

const initialOutputState = 'Your results will be shown here';

export const TestsOutput = () => {
  const { isTestsStarted, solution, success } = useTypedSelector((state) => state.solution);
  const [output, setOutput] = useState(initialOutputState);
  const [failure, setFailure] = useState(false);
  const [testsStats, setTestsStats] = useState<TestsStats | null>(null);
  const { endTesting, setSuccess } = useActions();

  const startTests = () => {
    setOutput('Sending request...');
    const socket = new WebSocket(WS_URL);

    socket.onopen = function () {
      setFailure(false);
      setOutput('');
      socket.send(solution);
    };

    socket.onmessage = function (event) {
      if (event.data.startsWith('--stats--'))
        return setTestsStats(JSON.parse(event.data.replace('--stats--', '')));
      if (event.data === '--success--') return setSuccess();
      if (event.data === '--failure--') return setFailure(true);
      setOutput((state) => state + `\n${event.data}\n`);
    };

    socket.onclose = function () {
      endTesting();
    };

    socket.onerror = function (error) {
      setOutput((state) => state + `\n[error] ${error}\n`);
    };
  };

  useEffect(() => {
    if (isTestsStarted) startTests();
  }, [isTestsStarted]);

  return (
    <div className={`tests ${success ? 'success' : failure ? 'failure' : ''}`}>
      {testsStats && <TestStats stats={testsStats} />}
      <div className="tests__output">
        <div className="tests__text">
          {testsStats && <h2 className="tests__results">Test results: </h2>}
          {output.split('\n').map((line) => (
            <OutputLine key={nanoid()} line={line} />
          ))}
          {success && <div className="tests__congrats"> You have passed all of the tests! :) </div>}
        </div>
      </div>
    </div>
  );
};
