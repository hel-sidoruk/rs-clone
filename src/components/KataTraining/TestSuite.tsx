import { nanoid } from 'nanoid';
import React, { memo, useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { OutputLine } from '../UI/OutputLine';

export const TestSuite = memo(function TestSuite({ suite }: { suite: string }) {
  const [title, ...values] = suite.split('\n').filter(Boolean);
  const [isOpened, setIsOpened] = useState(true);
  const { success } = useTypedSelector((state) => state.solution);

  return (
    <div className={`suite ${isOpened ? 'opened' : ''}`}>
      <div className="suite__top" onClick={() => setIsOpened((state) => !state)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={`${success ? '#67b04b' : '#c05c48'}`}
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className={`${success && !isOpened ? 'green' : !isOpened ? 'red' : ''}`}>
          {title.replace('--suite-start--', '')}
        </span>
      </div>
      <div className="suite__content">
        {values.map((line) => (
          <OutputLine key={nanoid()} line={line} />
        ))}
      </div>
    </div>
  );
});
