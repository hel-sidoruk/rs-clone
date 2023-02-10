import React, { FormEvent, useEffect, useRef, useState } from 'react';
import useActions from '../../hooks/useActions';
import { CloseIcon, SearchIcon } from '../Icons';

const SearchInput = () => {
  const { changeFilters } = useActions();

  const [searchValue, setSearchValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  function updateValue(e: FormEvent<HTMLInputElement>) {
    const elem = e.target as HTMLInputElement;
    const val = elem.value;
    setSearchValue(val);
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
      onSubmit={(e) => {
        e.preventDefault();
        changeFilters('search', searchValue);
      }}
      onReset={() => {
        resetInput();
        changeFilters('search', '');
      }}
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
