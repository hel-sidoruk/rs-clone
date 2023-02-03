import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import { useCaretPosition } from '../../hooks/useCaretPosition';
import { useKeyPress } from '../../hooks/useKeyPress';
import useTypedSelector from '../../hooks/useTypedSelector';
import { getInitialFunction } from '../../utils';
import { CodeHighlight } from './CodeHighlight';
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
      <div className="code__editor-wrapper">
        <CodeHighlight text={solution} />
        {/* {solution.split(' ').map((word) =>
          operators.includes(word) ? (
            <span className="purple-text" key={nanoid()}>
              {word}{' '}
            </span>
          ) : word.match(/'.*'/) ? (
            <span className="green-text" key={nanoid()}>
              {word}{' '}
            </span>
          ) : word.match(/\d/) ? (
            <span className="orange-text" key={nanoid()}>
              {word}{' '}
            </span>
          ) : (
            <span key={nanoid()}>{word} </span>
          )
        )} */}
        <textarea
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
