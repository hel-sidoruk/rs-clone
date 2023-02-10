import React from 'react';
import Contributions from './stats/Contributions';
import Progress from './stats/Progress';

const Indicators = () => {
  return (
    <div className="stats__indicators">
      <Progress />
      <Contributions />
    </div>
  );
};
export default Indicators;
