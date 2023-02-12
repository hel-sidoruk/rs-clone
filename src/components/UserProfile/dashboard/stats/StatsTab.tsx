import React from 'react';
import Indicators from './Indicators';

export const StatsTab = () => {
  return (
    <div className="stats">
      <div className="stats__refresh">
        <i className="icon-moon-info icon-moon"></i>
        Next stats refresh now
      </div>
      <Indicators />
    </div>
  );
};
