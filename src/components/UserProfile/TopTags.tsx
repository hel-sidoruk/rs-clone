import React from 'react';

const TopTags = () => {
  return (
    <div className="stats__top-tags">
      <div className="stats__subtitle">
        <i className="icon-moon-tag icon-moon colored"></i>
        Top Tags:
      </div>
      <div>
        <span>Fundamentals: </span>112
      </div>
      <div>
        <span>Mathematics: </span>47
      </div>
      <div>
        <span>Algorithms: </span>37
      </div>
      <div>
        <span>Strings: </span>30
      </div>
      <div>
        <span>Puzzles: </span>9
      </div>
      <div>
        <span>Arrays: </span>6
      </div>
    </div>
  );
};
export default TopTags;
