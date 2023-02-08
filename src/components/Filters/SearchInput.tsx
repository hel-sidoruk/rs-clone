import React, { FormEvent, useState } from 'react';
import CloseIcon from '../Icons/CloseIcon';
import SearchIcon from '../Icons/SearchIcon';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');

  function updateValue(e: FormEvent<HTMLInputElement>) {
    const elem = e.target as HTMLInputElement;
    const val = elem.value;
    setSearchValue(val);
  }

  function setSearchString(e: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    e.preventDefault();
    console.log(searchValue);
  }

  function resetInput() {
    setSearchValue('');
  }

  return (
    <form className="filters__search" onSubmit={setSearchString}>
      <input type="text" value={searchValue} onInput={updateValue} />
      <div className="filters__btn-wrap">
        {searchValue ? (
          <button onClick={resetInput}>
            <CloseIcon />
          </button>
        ) : null}
        <button onClick={setSearchString}>
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
