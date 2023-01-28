import React, { useState } from 'react';
import { useCaretPosition } from '../../hooks/useCaretPosition';
import { useKeyPress } from '../../hooks/useKeyPress';
import { getInitialFunction } from '../../utils';
import { CodeLineCounter } from './CodeLineCounter';

export const Code = ({ functionName, fnArgs }: { functionName: string; fnArgs: string }) => {
  const [value, setValue] = useState(getInitialFunction(functionName, fnArgs));
  const [textAreaRef, updateCaret, setCaretPosition] = useCaretPosition();
  const [rowsCount, handleKeyDown] = useKeyPress(textAreaRef, value, setValue, setCaretPosition);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    updateCaret();
  };

  return (
    <div className="code">
      <CodeLineCounter rowsCount={rowsCount} />
      <textarea
        className="code__editor"
        ref={textAreaRef}
        onKeyDown={handleKeyDown}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
