import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import { useCaretPosition } from '../../hooks/useCaretPosition';
import { useKeyPress } from '../../hooks/useKeyPress';
import useTypedSelector from '../../hooks/useTypedSelector';
import { getInitialFunction } from '../../utils';
import { CodeLineCounter } from './CodeLineCounter';

export const Code = ({ functionName, fnArgs }: { functionName: string; fnArgs: string }) => {
  const [textAreaRef, updateCaret, setCaretPosition] = useCaretPosition();
  const [rowsCount, handleKeyDown] = useKeyPress(textAreaRef, setCaretPosition);
  const { updateSolution } = useActions();
  const { solution } = useTypedSelector((state) => state.solution);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateSolution(e.target.value);
    updateCaret();
  };

  useEffect(() => {
    updateSolution(getInitialFunction(functionName, fnArgs));
  }, []);

  return (
    <div className="code">
      <CodeLineCounter rowsCount={rowsCount} />
      <textarea
        className="code__editor"
        ref={textAreaRef}
        onKeyDown={handleKeyDown}
        value={solution}
        onChange={handleChange}
      />
    </div>
  );
};
