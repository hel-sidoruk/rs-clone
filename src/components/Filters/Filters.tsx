import React from 'react';
import DropDownSingle from './DropDownSingle';
import SearchInput from './SearchInput';
import { filterLists } from '../../utils';
import DropDownMultiply from './DropDownMultiply';

const Filters = () => {
  return (
    <div className="library__filters filters">
      <SearchInput />
      <div className="filters__drop-down sort">
        Sort By
        <DropDownSingle list={filterLists.sort} />
      </div>
      <div className="filters__drop-down progress">
        Progress
        <DropDownSingle list={filterLists.progress} />
      </div>
      <div className="filters__drop-down difficulty">
        Difficulty
        <DropDownMultiply list={filterLists.difficulty} filterType="difficulty" />
      </div>
      <div className="filters__drop-down tags-filter">
        Tags
        <DropDownMultiply list={filterLists.tags} filterType="tags" />
      </div>
    </div>
  );
};

export default Filters;
