import React, { FormEvent, useEffect, useRef, useState } from 'react';
import CloseIcon from '../Icons/CloseIcon';
import SearchIcon from '../Icons/SearchIcon';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  function updateValue(e: FormEvent<HTMLInputElement>) {
    const elem = e.target as HTMLInputElement;
    const val = elem.value;
    setSearchValue(val);
  }

  function getSearchString(e: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    e.preventDefault();
    console.log(searchValue);
  }

  function resetInput() {
    setSearchValue('');
  }

  useEffect(() => {
    const handler = (e: Event) => {
      if (!formRef.current.contains(e.target as Node)) {
        setIsFocus(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <form
      className={isFocus ? 'filters__search filters__search_focus' : 'filters__search'}
      onSubmit={getSearchString}
      onReset={resetInput}
      onClick={() => setIsFocus(!isFocus)}
      ref={formRef}
    >
      <input type="text" value={searchValue} onInput={updateValue} />
      <div className="filters__btn-wrap">
        {searchValue ? (
          <button type="reset">
            <CloseIcon />
          </button>
        ) : null}
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
