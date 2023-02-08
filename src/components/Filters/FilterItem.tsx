import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import CheckMark from '../Icons/CheckMark';

type FilterItemProps = {
  active?: boolean;
  value: string;
  onClick?(): void;
} & HTMLAttributes<HTMLDivElement>;

// eslint-disable-next-line react/display-name
const FilterItem = forwardRef<HTMLDivElement, PropsWithChildren<FilterItemProps>>((props, ref) => {
  const { active, children, ...rest } = props;

  return (
    <div className={active ? 'drop-down__item drop-down__item_active' : 'drop-down__item'}>
      <CheckMark />
      {props.children}
    </div>
  );
});

export default FilterItem;
