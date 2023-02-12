import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import useActions from '../../hooks/useActions';
import { CloseIcon, DropIcon } from '../Icons';
import FilterItem from './FilterItem';
import Label from './Label';

const DropdownMultiple = ({ list, filterType }: { list: string[]; filterType: string }) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const { changeFilters } = useActions();

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const elem = e.target as HTMLButtonElement;
    if (!elem.closest('.drop-down__label') && !elem.closest('.drop-down__reset')) {
      setOpen((state) => !state);
    }
  };

  const selectHandler = (param: string) => {
    const newState = selected.includes(param)
      ? selected.filter((item) => param !== item)
      : [...selected, param];
    setSelected(newState);

    const filters = newState.map((filter) => filter.toLowerCase()).join('*');
    changeFilters(filterType, filters);
  };

  const reset = () => {
    setSelected([]);
    changeFilters(filterType, '');
  };

  useEffect(() => {
    const handler = () => setOpen(false);
    document.body.addEventListener('click', handler);
    return () => {
      document.body.removeEventListener('click', handler);
    };
  });

  return (
    <div className={isOpen ? `drop-down drop-down_open` : `drop-down`}>
      <button className={`drop-down__top ${selected.length ? 'active' : ''}`} onClick={handleOpen}>
        <div>
          {selected.length
            ? selected.map((tag) => <Label key={nanoid()} text={tag} cb={selectHandler} />)
            : `Select ${filterType === 'difficulty' ? 'ranks' : 'tags'}`}
        </div>
        <div className="drop-down__wrap">
          {selected.length ? (
            <div className="drop-down__reset" onClick={reset}>
              <CloseIcon />
            </div>
          ) : null}
          <DropIcon />
        </div>
      </button>
      <div onClick={(e) => e.stopPropagation()} className="drop-down__list">
        {list.map((item) => (
          <FilterItem
            selectHandler={selectHandler}
            isSelected={selected.includes(item)}
            key={item}
            content={item}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownMultiple;
