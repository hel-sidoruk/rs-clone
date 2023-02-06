import { useState } from 'react';
import { TestsStats } from '../types';
import { WS_URL } from '../utils';
import useActions from './useActions';
import useTypedSelector from './useTypedSelector';

export function useTesting(kataId: string): [() => void, string, boolean, TestsStats | null] {
  const [output, setOutput] = useState('');
  const [failure, setFailure] = useState(false);
  const [testsStats, setTestsStats] = useState<TestsStats | null>(null);
  const { solution } = useTypedSelector((state) => state.solution);
  const { setSuccess, endTesting, markAsSolved } = useActions();

  const startTests = () => {
    setOutput('Sending request...');
    const socket = new WebSocket(WS_URL);

    socket.onopen = function () {
      setFailure(false);
      setOutput('');
      socket.send(JSON.stringify({ kataId, solution }));
    };

    socket.onmessage = function (event) {
      if (event.data.startsWith('--stats--'))
        return setTestsStats(JSON.parse(event.data.replace('--stats--', '')));
      if (event.data === '--success--') {
        markAsSolved(kataId);
        return setSuccess(true);
      }
      if (event.data === '--failure--') return setFailure(true);
      setOutput((state) => state + `${event.data}\n`);
    };

    socket.onclose = function () {
      endTesting();
    };

    socket.onerror = function (error) {
      setOutput((state) => state + `\n[error] ${error}\n`);
    };
  };

  return [startTests, output, failure, testsStats];
}
