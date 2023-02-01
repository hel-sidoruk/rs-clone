import { useState } from 'react';
import { getBlocksCount } from '../utils';
import useActions from './useActions';
import { useDoubleKey } from './useDoubleKey';
import useTypedSelector from './useTypedSelector';

type FnType = (
  ref: React.RefObject<HTMLTextAreaElement>,
  // value: string,
  // setValue: (s: string) => void,
  setPosition: (n: number) => void
) => [number, (e: React.KeyboardEvent<HTMLTextAreaElement>) => void];

export const useKeyPress: FnType = (ref, setCaretPosition) => {
  const [isNewBlock, setIsNewBlock] = useState(false);
  const [doubleKey] = useDoubleKey(ref, setCaretPosition);
  const [rowsCount, setRowsCount] = useState(3);

  const { solution } = useTypedSelector((state) => state.solution);
  const { updateSolution } = useActions();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (['Tab', 'Enter', '{', '(', '[', '"', "'", '`'].includes(e.key)) {
      e.preventDefault();
      e.key !== 'Enter' && doubleKey(e.key);
      e.key === '{' && setIsNewBlock(true);
    }

    if (e.key === 'Enter') {
      setRowsCount((state) => state + (isNewBlock ? 2 : 1));
      if (ref.current) {
        const { selectionStart, selectionEnd } = ref.current as HTMLTextAreaElement;
        const blocksCount = getBlocksCount(solution, selectionEnd);

        const newValue =
          solution.substring(0, selectionStart) +
          '\n' +
          '  '.repeat(blocksCount) +
          (isNewBlock ? '\n' + '  '.repeat(blocksCount ? blocksCount - 1 : 0) : '') +
          solution.substring(selectionEnd);

        updateSolution(newValue);
        setCaretPosition(selectionStart + 1 + 2 * blocksCount);
        if (isNewBlock) setIsNewBlock(false);
      }
    }
  };
  return [rowsCount, handleKeyDown];
};
