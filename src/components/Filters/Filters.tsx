import React from 'react';
import { FilterDropDown } from './FilterDropDown';
import DropDown from './DropDown';
import FilterItem from './FilterItem';
import SearchInput from './SearchInput';

const list = ['Newest', 'Oldest', 'Popularity', 'Hardest', 'Easiest', 'Name'];

const Filters = () => {
  return (
    <div className="library__filters filters">
      <SearchInput />
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
      <div>
        Test
        <DropDown label={<div>test</div>}>
          {list.map((item) => (
            <FilterItem key={item} value={item}>
              {item}
            </FilterItem>
          ))}
        </DropDown>
      </div>
    </div>
  );
};

export default Filters;
