import React from 'react';

const Filters = () => {
  return (
    <div className="library__filters filters">
      <div className="filters__search">search</div>
      <div className="filters__drop-down sort">Sort By</div>
      <div className="filters__drop-down status">Status</div>
      <div className="filters__drop-down progress">Progress</div>
      <div className="filters__drop-down difficulty">Difficulty</div>
      <div className="filters__drop-down tags-filter">Tags</div>
    </div>
  );
};

export default Filters;
