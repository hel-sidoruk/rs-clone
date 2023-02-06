import React, { useState } from 'react';

interface InitialArray {
  first: number;
  inv: number;
}

export const KataDiscuss = () => {
  const [check, setCheck] = useState({ first: 0, inv: 0 } as InitialArray);
  const [showDiscuss, setShowDiscuss] = useState(false);
  const [discuss, setDiscuss] = useState('');
  const setCheckBox = (item: string, value = 0) => {
    if (item === 'inv') {
      setCheck((check) => ({ ...check, inv: check.inv === 0 ? 1 : 0 }));
    } else {
      setCheck((check) => ({ ...check, first: value }));
    }
  };

  const checkBoxes = {
    id: 'first',
    title: 'View',
    items: ['All', 'Issue', 'Questions', 'Suggestions'],
    inv: {
      text: 'Show Resolved',
    },
  };

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
        <div className="_header">
          <span className="span">Test Cases</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="section solution-main">
        <div className="left-bar">
          <div className="left-bar-items">
            <div className="sort">
              <span className="title">{checkBoxes.title}</span>

              {checkBoxes.items.map((text, idx) => (
                <span
                  key={text}
                  className={
                    check[checkBoxes.id as keyof InitialArray] === idx
                      ? 'check-box current'
                      : 'check-box'
                  }
                  onClick={() => setCheckBox('first', idx)}
                >
                  <span className="item"></span>
                  <span className="text">{text}</span>
                  {idx !== 0 ? <span className="counter">2</span> : null}
                </span>
              ))}
              {checkBoxes.inv ? (
                <span
                  className={check.inv === 1 ? 'check-box square current' : 'check-box square'}
                  onClick={() => setCheckBox('inv')}
                >
                  <span className="item"></span>
                  <span className="text">{checkBoxes.inv.text}</span>
                </span>
              ) : null}
            </div>
            <div className="adds">
              <a
                href="https://www.codewars.com/post/8-reasons-why-codewarriors-practice-coding-with-codewars"
                target="_blank"
                rel="noreferrer"
              >
                <span className="image">
                  <img
                    src="https://uploads-ssl.webflow.com/62e95dddfb380a0e61193e7d/6363e7db70db732290fa3db6_logo-256.png"
                    alt="some-cw-image"
                  />
                </span>
                <span className="info">
                  <span className="title">
                    8 Reasons Why Codewarriors Practice Coding with Codewars
                  </span>
                  <span>
                    Not everyone trains the same. Discover new ways to leverage Codewars in your
                    education and career.
                  </span>
                </span>
              </a>
            </div>
            <div className="adds">
              <a
                href="https://www.codewars.com/post/10-traits-employers-look-for-when-hiring-software-engineers"
                target="_blank"
                rel="noreferrer"
              >
                <span className="image">
                  <img
                    src="https://uploads-ssl.webflow.com/62e95dddfb380a0e61193e7d/6397a637b0034f276c24d9fe_62f25d9703388a1bef8320f8_62d5c7124ddf80d307192793_AdobeStock_164314960%2520(1)-p-2600%201.png"
                    alt="some-cw-image"
                  />
                </span>
                <span className="info">
                  <span className="title">
                    10 Traits Employers Look for When Hiring Software Engineers
                  </span>
                  <span>
                    Codewars CEO Jake Hoffner breaks down the 10 traits he looks for in software
                    engineers.
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
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
                <button
                  className="btn btn-fill"
                  onClick={() => {
                    console.log('send');
                  }}
                >
                  Post
                </button>
                <button className="btn" onClick={() => closeDiscuss()}>
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
