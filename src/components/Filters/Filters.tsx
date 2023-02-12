import React from 'react';
import DropdownSingle from './DropdownSingle';
import SearchInput from './SearchInput';
import { filterLists } from '../../utils';
import DropdownMultiple from './DropdownMultiple';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';

const Filters = () => {
  const { isAuthorized } = useTypedSelector((state) => state.authorizedUser);
  const { fetchKatas } = useActions();

  return (
    <div className="library__filters filters">
      <SearchInput />
      <div className="filters__drop-down">
        Sort By
        <DropdownSingle list={filterLists.sort} type="sort" />
      </div>
      {isAuthorized && (
        <div className="filters__drop-down">
          Progress
          <DropdownSingle list={filterLists.progress} type="progress" />
        </div>
      )}
      <div className="filters__drop-down">
        Difficulty
        <DropdownMultiple list={filterLists.difficulty} filterType="difficulty" />
      </div>
      <div className="filters__drop-down">
        Tags
        <DropdownMultiple list={filterLists.tags} filterType="tags" />
      </div>
      <button className="btn" onClick={fetchKatas}>
        Search
      </button>
    </div>
  );
};

export default Filters;
