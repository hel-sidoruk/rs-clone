import React, { useState } from 'react';

const options = ['Instructions', 'Output', 'Past Solutions'];

export const KataTrainingInfo = () => {
  const [active, setActive] = useState(options[0]);

  const getClassname = (i: number) => {
    return `controls__btn ${active === options[i] ? 'active' : ''}`;
  };

  return (
    <div className="kata-train__info">
      <div className="controls">
        <button className={getClassname(0)} onClick={() => setActive(options[0])}>
          Instructions
        </button>
        <button className={getClassname(1)} onClick={() => setActive(options[1])}>
          Output
        </button>
        <button className={getClassname(2)} onClick={() => setActive(options[2])}>
          Past Solutions
        </button>
      </div>
      <div className={`kata-train__descr ${active === options[1] ? 'output' : ''}`}>{active}</div>
    </div>
  );
};
