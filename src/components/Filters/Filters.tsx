import React from 'react';
import DropdownSingle from './DropdownSingle';
import SearchInput from './SearchInput';
import { filterLists } from '../../utils';
import DropdownMultiple from './DropdownMultiple';

const Filters = () => {
  return (
    <div className="library__filters filters">
      <SearchInput />
      <div className="filters__drop-down sort">
        Sort By
        <DropdownSingle list={filterLists.sort} type="sort" />
      </div>
      <div className="filters__drop-down progress">
        Progress
        <DropdownSingle list={filterLists.progress} type="progress" />
      </div>
      <div className="filters__drop-down difficulty">
        Difficulty
        <DropdownMultiple list={filterLists.difficulty} filterType="difficulty" />
      </div>
      <div className="filters__drop-down tags-filter">
        Tags
        <DropdownMultiple list={filterLists.tags} filterType="tags" />
      </div>
    </div>
  );
};

export default Filters;
