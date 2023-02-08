import React, { FormEvent, useState } from 'react';
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

  return (
    <form className="filters__search" onSubmit={setSearchString}>
      <input type="text" value={searchValue} onInput={updateValue} />
      <button onClick={setSearchString}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchInput;
