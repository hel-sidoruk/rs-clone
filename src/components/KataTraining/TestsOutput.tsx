import React, { useEffect, useState } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { WS_URL } from '../../utils';

const initialOutputState = 'Your results will be shown here';

export const TestsOutput = () => {
  const { isTestsStarted, solution } = useTypedSelector((state) => state.solution);
  const [output, setOutput] = useState(initialOutputState);
  const { endTesting } = useActions();
  const startTests = () => {
    setOutput('Sending request...');
    const socket = new WebSocket(WS_URL);

    socket.onopen = function (e) {
      setOutput((state) => state + '\nConnection established\n');
      setOutput((state) => state + '\nSending solution on server...\n');
      socket.send(solution);
    };

    socket.onmessage = function (event) {
      setOutput((state) => state + `\nGot data from server: \n${event.data}\n`);
    };

    socket.onclose = function (event) {
      endTesting();
      if (event.wasClean) {
        setOutput((state) => state + `\nConnection closed\n`);
      } else {
        setOutput((state) => state + '\n[close] Соединение прервано\n');
      }
    };

    socket.onerror = function (error) {
      setOutput((state) => state + `\n[error] ${error}\n`);
    };
  };

  useEffect(() => {
    if (isTestsStarted) startTests();
  }, [isTestsStarted]);

  return <div className="test-text">{output}</div>;
};
