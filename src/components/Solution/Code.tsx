import React, { useState } from 'react';
import { useCaretPosition } from '../../hooks/useCaretPosition';
import { useDoubleKey } from '../../hooks/useDoubleKey';
import { getBlocksCount, getInitialFunction } from '../../utils';
import { CodeLineCounter } from './CodeLineCounter';

export const Code = ({ functionName, fnArgs }: { functionName: string; fnArgs: string }) => {
  const [value, setValue] = useState(getInitialFunction(functionName, fnArgs));
  const [textAreaRef, updateCaret, setCaretPosition] = useCaretPosition();
  const [rowsCount, setRowsCount] = useState(3);
  const [isNewBlock, setIsNewBlock] = useState(false);
  const [doubleKey] = useDoubleKey(textAreaRef, value, setValue, setCaretPosition);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (['Tab', 'Enter', '{', '(', '[', '"', "'", '`'].includes(e.key)) {
      e.preventDefault();
      e.key !== 'Enter' && doubleKey(e.key);
      e.key === '{' && setIsNewBlock(true);
    }

    if (e.key === 'Enter') {
      setRowsCount((state) => state + (isNewBlock ? 2 : 1));
      if (textAreaRef.current) {
        const { selectionStart, selectionEnd } = textAreaRef.current as HTMLTextAreaElement;

        const blocksCount = getBlocksCount(value, selectionEnd);

        const newValue =
          value.substring(0, selectionStart) +
          '\n' +
          '  '.repeat(blocksCount) +
          (isNewBlock ? '\n' + '  '.repeat(blocksCount ? blocksCount - 1 : 0) : '') +
          value.substring(selectionEnd);

        if (isNewBlock) setIsNewBlock(false);
        setValue(newValue);
        setCaretPosition(selectionStart + 1 + 2 * blocksCount);
      }
    }
  };

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
