import React, { useState } from 'react';

const KataSolutionItem = () => {
  const [showDiscuss, setShowDiscuss] = useState(false);
  const [discuss, setDiscuss] = useState('');

  const openDiscuss = (id: number) => {
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
    <div className="result">
      <div className="head">
        <h6>
          <i className="icon-moon-users icon-moon"></i>
          <a className="user-link" href="/users/Pashabn">
            Pashabn
          </a>{' '}
          <span>, </span>
          <a className="user-link" href="/users/HelSidoruk">
            HelSidoruk
          </a>
        </h6>
      </div>
      <pre className="code-area">
        <code data-language="javascript"></code>
      </pre>
      <div className="similar-items">
        <div className="similar">
          1 similar code variation is grouped with this one
          <i
            className="icon-moon-info ml-1 icon-moon"
            title="We group similar results by ignoring whitespace, linebreaks and very minor character variations."
          ></i>
        </div>
        <button className="button">Show Variations</button>
      </div>
      <div className="bottom-things">
        <div className="best-practice">
          <i className="icon-moon-up icon-moon"></i>
          <div className="text">Best Practices</div>
          <div className="count">26</div>
        </div>
        <div className="best-practice">
          <i className="icon-moon-up icon-moon"></i>
          <div className="text">Clever</div>
          <div className="count">2</div>
        </div>
        <div className="discuss" onClick={() => openDiscuss(22)}>
          <i className="icon-moon-comments icon-moon"></i>
          <span>12</span>
        </div>
      </div>
      <div className={showDiscuss ? 'feedback open' : 'feedback'}>
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
  );
};

export default KataSolutionItem;
