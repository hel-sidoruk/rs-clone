import React, { useState } from 'react';

export const SortBlock = ({ title, items }: { title: string; items: string[] }) => {
  const [checked, setChecked] = useState('All');

  return (
    <div>
      <h4 className="title">{title}</h4>
      {items.map((el) => (
        <span
          key={el}
          className={checked === el ? 'check-box current' : 'check-box'}
          onClick={() => setChecked(el)}
        >
          <span className="item"></span>
          <span className="text">{el}</span>
        </span>
      ))}
    </div>
  );
};
