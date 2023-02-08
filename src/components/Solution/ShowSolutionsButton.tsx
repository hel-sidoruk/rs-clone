import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Modal } from '../UI/Modal';
import { ShowSolutionsDialog } from './ShowSolutionsDialog';

export const ShowSolutionsButton = ({ id }: { id: string }) => {
  const { forfeitedKatas, solvedKatas } = useTypedSelector((state) => state.account);
  const shouldShowSolutions = solvedKatas?.includes(id) || forfeitedKatas?.includes(id);
  const [isModalOpened, setIsModalOpened] = useState(false);

  return shouldShowSolutions ? (
    <Link to={`/kata/${id}/solutions`} className="btn btn-dark">
      <i className="icon-moon icon-moon-compare"></i>
      <span className="btn-text">view solutions</span>
    </Link>
  ) : (
    <>
      <button className="btn btn-dark" onClick={() => setIsModalOpened(true)}>
        <i className="icon-moon icon-moon-unlock"></i>Unlock Solutions
      </button>
      {isModalOpened && (
        <Modal onClose={() => setIsModalOpened(false)}>
          <ShowSolutionsDialog id={id} />
        </Modal>
      )}
    </>
  );
};
