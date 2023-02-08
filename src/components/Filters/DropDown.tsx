import React, { PropsWithChildren, ReactNode, useState } from 'react';
import DropIcon from '../Icons/DropIcon';

type DropDownProps = {
  label: ReactNode;
  //list: string[];
};

const DropDown = (props: PropsWithChildren<DropDownProps>) => {
  const { label, children } = props;

  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="drop-down">
      <button className="drop-down__top" onClick={handleOpen}>
        {label}
        <DropIcon />
      </button>
      {isOpen && <div className="drop-down__list">{children}</div>}
    </div>
  );
};

export default DropDown;
