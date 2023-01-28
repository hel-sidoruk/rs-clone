import React, { memo } from 'react';
import { nanoid } from 'nanoid';

export const CodeLineCounter = memo(function CodeLineCounter({ rowsCount }: { rowsCount: number }) {
  return (
    <div className="code__line-counter">
      {Array(rowsCount)
        .fill(0)
        .map((_, i) => (
          <span key={nanoid()}>{i + 1}</span>
        ))}
    </div>
  );
});
