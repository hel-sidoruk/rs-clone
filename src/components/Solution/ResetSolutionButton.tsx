import React, { useState } from 'react';
import useActions from '../../hooks/useActions';
import { Modal } from '../UI/Modal';
import { ResetSolutionDialog } from './ResetSolutionDialog';

export const ResetSolutionButton = ({ initialSolution }: { initialSolution: string }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { updateSolution } = useActions();

  const onSubmit = () => updateSolution(initialSolution);

  return (
    <>
      <button className="btn btn-dark" onClick={() => setIsModalOpened(true)}>
        reset
      </button>
      {isModalOpened && (
        <Modal onClose={() => setIsModalOpened(false)}>
          <ResetSolutionDialog onSubmit={onSubmit} />
        </Modal>
      )}
    </>
  );
};
