import React from 'react';

import { UserInterface } from '../../../../types/user';

const ProgressValue = ({ user }: { user: UserInterface }) => {
  return (
    <div className="stats__progress-value">
      <div>
        <b>Rank:</b> {user.rank}
      </div>
      <div>
        <b>Honor:</b> {user.honor}
      </div>
      <div>
        <b>Leaderboard Position:</b>#{user.leaderboardPosition}
      </div>
      <div>
        <b>Honor Percentile:</b>Top 0.000%
      </div>
      <div>
        <b>Total Completed Kata:</b> {user.totalCompleted}
      </div>
    </div>
  );
};
export default ProgressValue;
