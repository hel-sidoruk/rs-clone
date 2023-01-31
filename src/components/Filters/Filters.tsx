import React from 'react';
import { FilterDropDown } from './FilterDropDown';
import SearchIcon from '../Icons/SearchIcon';
const list = ['Newest', 'Oldest', 'Popularity', 'Hardest', 'Easiest', 'Name'];

const Filters = () => {
  return (
    <div className="library__filters filters">
      <div className="filters__search">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="filters__drop-down sort">
        Sort By
        <FilterDropDown list={list} />
      </div>
      <div className="filters__drop-down status">
        Status
        <FilterDropDown list={list} />
      </div>
      <div className="filters__drop-down progress">
        Progress
        <FilterDropDown list={list} />
      </div>
      <div className="filters__drop-down difficulty">
        Difficulty
        <FilterDropDown list={list} />
      </div>
      <div className="filters__drop-down tags-filter">
        Tags
        <FilterDropDown list={list} />
      </div>
    </div>
  );
};

export default Filters;
