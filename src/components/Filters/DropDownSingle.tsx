import React, { useEffect, useState } from 'react';
import useActions from '../../hooks/useActions';
import { DropIcon } from '../Icons';
import FilterItem from './FilterItem';

const DropdownSingle = ({ list, type }: { list: string[]; type: string }) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(list[0]);
  const { changeFilters } = useActions();

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(!isOpen);
  };

  const selectHandler = (param: string) => {
    setSelected(param);
    const filterValue = param.toLowerCase().replace(/ /g, '+');
    changeFilters(type, filterValue);
  };

  useEffect(() => {
    const handler = () => setOpen(false);
    document.body.addEventListener('click', handler);
    return () => document.body.removeEventListener('click', handler);
  });

  return (
    <div className={`drop-down ${isOpen ? 'drop-down_open' : ''}`}>
      <button className="drop-down__top" onClick={handleOpen}>
        {selected}
        <DropIcon />
      </button>
      <div className="drop-down__list">
        {list.map((item) => (
          <FilterItem
            selectHandler={selectHandler}
            isSelected={item === selected}
            key={item}
            content={item}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownSingle;
