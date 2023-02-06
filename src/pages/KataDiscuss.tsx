import React, { useState } from 'react';
import TestCases from '../components/Kata/TestCases';
import LeftBarForSolutions from '../components/Kata/leftBarForSolutions';

interface InitialArray {
  first: number;
  inv: number;
}

export const KataDiscuss = () => {
  const [showDiscuss, setShowDiscuss] = useState(false);
  const [discuss, setDiscuss] = useState('');
  const feedBackInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setDiscuss(e.currentTarget.value);
  };
  const closeDiscuss = () => {
    setDiscuss('');
    setShowDiscuss(false);
  };

  return (
    <>
      <div className="section _test-cases">
        <TestCases />
      </div>
      <div className="section solution-main">
        <LeftBarForSolutions sol={false} />
        <div className="results">
          <div className="result">
            <div className="feedback open">
              <div className="avatar"></div>
              <div className="input-field">
                <textarea
                  className="feedback-input"
                  placeholder="Leave feedback..."
                  onInput={(e) => feedBackInput(e)}
                  value={discuss}
                  id="feedback"
                />
                <label htmlFor="feedback" className="feedback-label">
                  <button
                    className="feedButtons"
                    onClick={() => {
                      console.log('send');
                    }}
                  >
                    Post
                  </button>
                  <button className="feedButtons" onClick={() => closeDiscuss()}>
                    Cancel
                  </button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
