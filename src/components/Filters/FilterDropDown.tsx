import React from 'react';
import DropIcon from '../Icons/DropIcon';

export const FilterDropDown = ({ list }: { list: string[] }) => {
  return (
    <div className="drop-down">
      <div className="drop-down__top">
        <div className="drop-down-current"></div>
        <DropIcon />
      </div>
      <ul className="drop-down__list">
        {list.map((item, index) => {
          return (
            <li key={index} className="drop-down__item">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
