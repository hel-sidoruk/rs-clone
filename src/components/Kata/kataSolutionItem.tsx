import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SolutionInterface } from '../../types';
import { CodeHighlight } from '../Solution/CodeHighlight';
import { SolutionControls } from './SolutionControls';

const KataSolutionItem = ({ solution }: { solution: SolutionInterface }) => {
  const [showDiscuss, setShowDiscuss] = useState(false);
  const [discuss, setDiscuss] = useState('');

  const openDiscuss = () => {
    if (showDiscuss) setDiscuss('');
    setShowDiscuss(!showDiscuss);
  };
  const feedBackInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setDiscuss(e.currentTarget.value);
  };
  const closeDiscuss = () => {
    setDiscuss('');
    setShowDiscuss(false);
  };

  return (
    <div className="solution-item">
      <div className="solution-item__head">
        <i className="icon-moon-users icon-moon"></i>
        <Link className="link" to={`/users/${solution.username}`}>
          {solution.username}
        </Link>
      </div>
      <div className="markdown solution-item__code">
        <CodeHighlight>{solution.solution}</CodeHighlight>
      </div>
      <SolutionControls
        bestPractices={solution.bestPracticesVotes}
        clever={solution.cleverVotes}
        handler={openDiscuss}
      />
      <div className={showDiscuss ? 'feedback open' : 'feedback'}>
        <div className="avatar"></div>
        <div className="input-field">
          <textarea
            className="feedback-input"
            placeholder="Leave feedback..."
            onInput={feedBackInput}
            value={discuss}
          />
          <label className="feedback-label">
            <button
              className="btn btn-fill"
              onClick={() => {
                console.log('send');
              }}
            >
              Post
            </button>
            <button className="btn" onClick={closeDiscuss}>
              Cancel
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default KataSolutionItem;
