import React from 'react';
import Contributions from './Contributions';
import Progress from './Progress';

const Indicators = () => {
  return (
    <div className="stats__indicators">
      <Progress />
      <Contributions />
    </div>
  );
};
export default Indicators;
