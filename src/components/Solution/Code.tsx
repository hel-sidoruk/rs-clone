import React, { useCallback, useEffect, useRef, useState } from 'react';

export const Code = ({ functionName }: { functionName: string }) => {
  const [value, setValue] = useState(`function ${functionName}(){

}
  `);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [rowsCount, setRowsCount] = useState(3);
  const [isNewBlock, setIsNewBlock] = useState(false);

  const [caretPosition, setCaretPosition] = useState(0);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    switch (e.key) {
      case 'Tab':
        e.preventDefault();
        if (textAreaRef.current) {
          const { selectionStart, selectionEnd } = textAreaRef.current as HTMLTextAreaElement;
          const newValue =
            value.substring(0, selectionStart) + '  ' + value.substring(selectionEnd);
          setValue(newValue);
          setCaretPosition(selectionStart + 2);
        }
        break;
      case 'Enter':
        e.preventDefault();
        setRowsCount((state) => state + (isNewBlock ? 2 : 1));
        if (textAreaRef.current) {
          const { selectionStart, selectionEnd } = textAreaRef.current as HTMLTextAreaElement;

          const blocksCount = value
            .substring(selectionEnd)
            .split('')
            .filter((el) => el === '}').length;

          const newValue =
            value.substring(0, selectionStart) +
            '\n' +
            '  '.repeat(blocksCount) +
            (isNewBlock ? '\n' + '  '.repeat(blocksCount > 0 ? blocksCount - 1 : 0) : '') +
            value.substring(selectionEnd);
          if (isNewBlock) setIsNewBlock(false);
          setValue(newValue);
          setCaretPosition(selectionStart + 1 + 2 * blocksCount);
        }
        break;
      case '{':
        setIsNewBlock(true);
        e.preventDefault();
        if (textAreaRef.current) {
          const { selectionStart, selectionEnd } = textAreaRef.current as HTMLTextAreaElement;
          const newValue =
            value.substring(0, selectionStart) + '{}' + value.substring(selectionEnd);
          setValue(newValue);
          setCaretPosition(selectionStart + 1);
        }

        break;
      case '(':
        e.preventDefault();
        if (textAreaRef.current) {
          const { selectionStart, selectionEnd } = textAreaRef.current as HTMLTextAreaElement;
          const newValue =
            value.substring(0, selectionStart) + '()' + value.substring(selectionEnd);
          setValue(newValue);
          setCaretPosition(selectionStart + 1);
        }

        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    updateCaret();
  };

  const updateCaret = useCallback(() => {
    if (textAreaRef.current) {
      const { selectionStart } = textAreaRef.current;

      setCaretPosition(selectionStart);
    }
  }, []);

  useEffect(() => {
    if (textAreaRef.current) textAreaRef.current.setSelectionRange(caretPosition, caretPosition);
  });
  return (
    <div className="code">
      <div className="code__line-counter">
        {Array(rowsCount)
          .fill(0)
          .map((_, i) => (
            <span key={Math.random().toString(16)}>{i + 1}</span>
          ))}
      </div>
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
