import React from 'react';
import Indicators from './dashboard/stats/Indicators';

const UserStats = () => {
  return (
    <div className="user-profile__stats user-stats">
      <div className="user-stats__tabs">
        <div className="user-stats__tab user-stats__tab_open">Stats</div>
        <div className="user-stats__tab">Kata</div>
        <div className="user-stats__tab">Collections</div>
        <div className="user-stats__tab">Discourse</div>
      </div>
      <div className="user-stats__stats">
        <div className="stats">
          <div className="stats__refresh">
            <i className="icon-moon-info icon-moon"></i>
            Next stats refresh now
          </div>
          <Indicators />
        </div>
      </div>
    </div>
  );
};
export default UserStats;
