import React, { useState } from 'react';
import CheckMark from '../Icons/CheckMark';

type FilterItemProps = {
  content: string;
  update: (title: string) => void;
  open: () => void;
};

const FilterItem = ({ content, update, open }: FilterItemProps) => {
  const [isActive, setIsActive] = useState(false);

  const activeHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={isActive ? 'drop-down__item drop-down__item_active' : 'drop-down__item'}
      onClick={() => {
        activeHandler();
        update(content);
        open();
      }}
    >
      <CheckMark />
      {content}
    </div>
  );
};

export default FilterItem;
