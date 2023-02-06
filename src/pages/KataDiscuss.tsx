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
      <div className="section solution-main">
        <LeftBarForSolutions sol={false} />
        <div className="section">
          <div className="feedback open">
            <div className="avatar"></div>
            <div className="input-field">
              <textarea
                className="feedback-input"
                placeholder="Leave feedback..."
                onInput={feedBackInput}
                value={discuss}
              />
              <label className="feedback-label">
                <button className="btn btn-fill" onClick={() => console.log('send')} >
                  Post
                </button>
                <button className="btn" onClick={closeDiscuss}>
                  Cancel
                </button>
              </label>
             </div>
           </div>
         </div>
      </div>
    </>
  );
};
