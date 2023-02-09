import React, { useEffect, useRef, useState } from 'react';
import { CloseIcon, DropIcon } from '../Icons';
import FilterItem from './FilterItem';
import Label from './Label';

const DropDownMultiply = ({ list, filterType }: { list: string[]; filterType: string }) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const menuRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    const elem = e.target as HTMLButtonElement;
    if (!elem.closest('.drop-down__label') && !elem.closest('.drop-down__reset')) {
      setOpen(!isOpen);
    }
  };

  const selectHandler = (param: string) => {
    setSelected(
      selected.includes(param) ? selected.filter((item) => param !== item) : [...selected, param]
    );
  };

  useEffect(() => {
    const handler = (e: Event) => {
      const elem = e.target as HTMLElement;
      if (!menuRef.current.contains(e.target as Node) && !elem.closest('.drop-down__top')) {
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
        <div>
          {selected.length
            ? selected.map((tag, index) => (
                <Label key={index} text={tag} cb={selectHandler}></Label>
              ))
            : `Select ${filterType === 'difficulty' ? 'ranks' : 'tags'}`}
        </div>
        <div className="drop-down__wrap">
          {selected.length ? (
            <div className="drop-down__reset" onClick={() => setSelected([])}>
              <CloseIcon />
            </div>
          ) : null}
          <DropIcon />
        </div>
      </button>
      <div
        ref={menuRef}
        className={isOpen ? 'drop-down__list drop-down__list_open' : 'drop-down__list'}
      >
        {isOpen &&
          list.map((item) => (
            <FilterItem
              selectHandler={selectHandler}
              isSelected={selected.includes(item)}
              key={item}
              content={item}
            ></FilterItem>
          ))}
      </div>
    </div>
  );
};

export default DropDownMultiply;
