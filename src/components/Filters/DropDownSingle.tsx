import React, { useEffect, useRef, useState } from 'react';
import DropIcon from '../Icons/DropIcon';
import FilterItem from './FilterItem';

const DropDownSingle = ({ list }: { list: string[] }) => {
  const [isOpen, setOpen] = useState(false);
  const [topTitle, setTopTitle] = useState(list[0]);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const menuRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const handler = (e: Event) => {
      if (!menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const updateTop = (title: string) => {
    setTopTitle(title);
  };

  return (
    <div className={isOpen ? `drop-down drop-down_open` : `drop-down`}>
      <button className="drop-down__top" onClick={handleOpen}>
        {topTitle}
        <DropIcon />
      </button>
      <div
        ref={menuRef}
        className={isOpen ? 'drop-down__list drop-down__list_open' : 'drop-down__list'}
      >
        {list.map((item) => (
          <FilterItem key={item} content={item} update={updateTop} open={handleOpen}></FilterItem>
        ))}
      </div>
    </div>
  );
};

export default DropDownSingle;
