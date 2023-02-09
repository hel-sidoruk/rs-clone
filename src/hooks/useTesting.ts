import { useState } from 'react';
import { TestsStats } from '../types';
import { updateProgress, WS_URL } from '../utils';
import useActions from './useActions';
import useTypedSelector from './useTypedSelector';

type ReturnType = [() => void, string, boolean, TestsStats | null];

export function useTesting(kataId: string, kataRank: string): ReturnType {
  const [output, setOutput] = useState('');
  const [failure, setFailure] = useState(false);
  const [testsStats, setTestsStats] = useState<TestsStats | null>(null);
  const { solution } = useTypedSelector((state) => state.solution);
  const { solvedKatas, forfeitedKatas, honor, rank, score } = useTypedSelector(
    (state) => state.account
  );
  const { setSuccess, endTesting, markAsSolved, updateUserProgress } = useActions();

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
        if (!solvedKatas?.includes(kataId)) {
          markAsSolved(kataId);
          if (!forfeitedKatas?.includes(kataId) && honor !== null && score !== null && rank) {
            const updates = updateProgress(kataRank, honor, parseInt(rank), score);
            const { newScore, newHonor, newRank } = updates;
            console.log(newScore, newHonor, newRank);
            updateUserProgress(newScore, newHonor, newRank);
          }
        }
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
