import React, { useEffect, useRef, useState } from 'react';
import { DropIcon } from '../Icons';
import FilterItem from './FilterItem';

const DropDownSingle = ({ list }: { list: string[] }) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(list[0]);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const selectHandler = (param: string) => setSelected(param);

  const menuRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const handler = (e: Event) => {
      const elem = e.target as HTMLElement;
      if (!menuRef.current.contains(e.target as Node) && elem.className !== 'drop-down__top') {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div className={isOpen ? `drop-down drop-down_open` : `drop-down`}>
      <button className="drop-down__top" onClick={handleOpen}>
        {selected}
        <DropIcon />
      </button>
      <div
        ref={menuRef}
        className={isOpen ? 'drop-down__list drop-down__list_open' : 'drop-down__list'}
      >
        {isOpen &&
          list.map((item) => (
            <FilterItem
              selectHandler={selectHandler}
              openHandler={handleOpen}
              isSelected={item === selected}
              key={item}
              content={item}
            ></FilterItem>
          ))}
      </div>
    </div>
  );
};

export default DropDownSingle;
