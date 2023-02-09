import React from 'react';
import CheckMark from '../Icons/CheckMark';

type FilterItemProps = {
  content: string;
  selectHandler: (param: string) => void;
  isSelected: boolean;
  openHandler?: () => void;
};

const FilterItem = ({ content, isSelected, selectHandler, openHandler }: FilterItemProps) => {
  return (
    <div
      className={isSelected ? 'drop-down__item drop-down__item_active' : 'drop-down__item'}
      onClick={() => {
        selectHandler(content);
        if (openHandler) openHandler();
      }}
    >
      <CheckMark />
      {content}
    </div>
  );
};

export default FilterItem;
