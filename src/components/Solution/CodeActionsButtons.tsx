import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SolutionsAPI } from '../../api/SolutionsAPI';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { ResetSolutionButton } from './ResetSolutionButton';
import { ShowSolutionsButton } from './ShowSolutionsButton';
import { SkipKataButton } from './SkipKataButton';

export const CodeActionsButtons = ({ kata }: { kata: KataInterface }) => {
  const { startTesting, updateSolution, setSuccess } = useActions();
  const { id } = useParams();
  const navigate = useNavigate();
  const { isTestsStarted, success, solution } = useTypedSelector((state) => state.solution);
  const { username } = useTypedSelector((state) => state.account);

  const startTests = (tests: 'all' | 'fixed') => {
    if (!solution) return;
    startTesting(tests);
  };

  const handleSubmit = async () => {
    setSuccess(null);
    if (id && success && username)
      await SolutionsAPI.addSolution(id, {
        username,
        solution,
        name: kata.name,
        rank: kata.rank,
      }).then(console.log);
    updateSolution('');
    navigate(`/kata/${id}/solutions`);
  };

  return (
    <div className="code__btns">
      <div className="code__btns-actions">
        <SkipKataButton />
        <ShowSolutionsButton id={id as string} />
        <Link to={`/kata/${id}/discuss`} className="btn btn-dark">
          <i className="icon-moon icon-moon-comments"></i>
          <span className="btn-text">discuss</span>
        </Link>
        <ResetSolutionButton initialSolution={kata.initialSolution} />
      </div>
      <div className={`code__btns-tests ${isTestsStarted ? 'disabled' : ''}`}>
        <button className="btn" onClick={() => startTests('fixed')}>
          test
        </button>
        {success === 'all' ? (
          <button className="btn btn-fill success" onClick={handleSubmit}>
            submit
          </button>
        ) : (
          <button className="btn btn-fill" onClick={() => startTests('all')}>
            attempt
          </button>
        )}
      </div>
    </div>
  );
};
