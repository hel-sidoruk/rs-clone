import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SolutionsAPI } from '../../api/SolutionsAPI';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { ShowSolutionsButton } from './ShowSolutionsButton';

export const CodeActionsButtons = () => {
  const { startTesting, updateSolution, setSuccess } = useActions();
  const { id } = useParams();
  const navigate = useNavigate();
  const { isTestsStarted, success, solution } = useTypedSelector((state) => state.solution);
  const { username } = useTypedSelector((state) => state.account);

  const startTests = () => {
    if (!solution) return;
    startTesting();
  };

  const handleSubmit = async () => {
    if (id && success && username)
      await SolutionsAPI.addSolution(id, {
        username,
        solution,
      }).then(console.log);
    updateSolution('');
    setSuccess(false);
    navigate(`/kata/${id}/solutions`);
  };

  return (
    <div className="code__btns">
      <div className="code__btns-actions">
        <Link to="/kata/2/train" className="btn btn-dark">
          <i className="icon-moon icon-moon-next"></i>
          <span className="btn-text">skip</span>
        </Link>
        <ShowSolutionsButton id={id as string} />
        <Link to={`/kata/${id}/discuss`} className="btn btn-dark">
          <i className="icon-moon icon-moon-comments"></i>
          <span className="btn-text">discuss</span>
        </Link>
        <button className="btn btn-dark">reset</button>
      </div>
      <div className={`code__btns-tests ${isTestsStarted ? 'disabled' : ''}`}>
        <button className="btn" onClick={startTests}>
          test
        </button>
        <button className={`btn btn-fill ${success ? 'success' : ''}`} onClick={handleSubmit}>
          {success ? 'submit' : 'attempt'}
        </button>
      </div>
    </div>
  );
};
