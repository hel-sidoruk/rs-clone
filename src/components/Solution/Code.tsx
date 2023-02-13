import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import { useCaretPosition } from '../../hooks/useCaretPosition';
import { useKeyPress } from '../../hooks/useKeyPress';
import useTypedSelector from '../../hooks/useTypedSelector';
import { CodeHighlight } from './CodeHighlight';
import { CodeLineCounter } from './CodeLineCounter';

export const Code = ({ initialValue }: { initialValue: string }) => {
  const [textAreaRef, updateCaret, setCaretPosition] = useCaretPosition();
  const [rowsCount, handleKeyDown] = useKeyPress(textAreaRef, setCaretPosition);
  const { updateSolution } = useActions();
  const { solution } = useTypedSelector((state) => state.solution);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateSolution(e.target.value);
    updateCaret();
  };

  useEffect(() => {
    updateSolution(initialValue);
  }, [initialValue]);

  return (
    <div className="code">
      <CodeLineCounter rowsCount={rowsCount} />
      <div className="code__editor-wrapper">
        <CodeHighlight>{solution}</CodeHighlight>
        <textarea
          spellCheck="false"
          className="code__editor"
          ref={textAreaRef}
          onKeyDown={handleKeyDown}
          value={solution}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
