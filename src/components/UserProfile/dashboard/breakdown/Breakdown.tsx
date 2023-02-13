import React, { useEffect, useState } from 'react';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import { getNextRank, getPercentScore, scoreNeededForRankingUp } from '../../../../utils';
import HonorBreakdown from './HonorBreakdown';
import RankBreakdown from './RankBreakdown';

const Breakdown = () => {
  const [nextRank, setNextRank] = useState(0);
  const [percent, setPercent] = useState(0);
  const { rank, score, honor } = useTypedSelector((state) => state.account);

  useEffect(() => {
    setNextRank(getNextRank(rank || '0'));
    setPercent(getPercentScore(scoreNeededForRankingUp[nextRank], score || 0, 1));
  });

  return (
    <div className="stats__breakdowns">
      <div className="stats__honor-breakdown">
        <HonorBreakdown />
      </div>
      <div className="stats__rank-breakdown">
        <RankBreakdown percent={percent} nextRank={nextRank} />
      </div>
    </div>
  );
};

export default Breakdown;
