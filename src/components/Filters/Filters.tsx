import React from 'react';
import DropDownSingle from './DropDownSingle';
import SearchInput from './SearchInput';
import { filterLists } from '../../utils';

const Filters = () => {
  return (
    <div className="library__filters filters">
      <SearchInput />
      <div className="filters__drop-down sort">
        Sort By
        <DropDownSingle list={filterLists.sort} />
      </div>
      {/*  <div className="filters__drop-down status">
        Status
        <DropDownSingle list={list} />
      </div> */}
      <div className="filters__drop-down progress">
        Progress
        <DropDownSingle list={filterLists.progress} />
      </div>
      <div className="filters__drop-down difficulty">
        Difficulty
        <DropDownSingle list={filterLists.difficulty} />
      </div>
      <div className="filters__drop-down tags-filter">
        Tags
        <DropDownSingle list={filterLists.tags} />
      </div>
    </div>
  );
};

export default Filters;
