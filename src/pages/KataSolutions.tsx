import React, { useState } from 'react';

interface InitialArray {
  first: number;
  second: number;
  inv: number;
}

export const KataSolutions = () => {
  const [check, setCheck] = useState({ first: 0, second: 0, inv: 0 } as InitialArray);

  const setCheckBox = (item: string, value = 0) => {
    if (item === 'inv') {
      setCheck((check) => ({ ...check, inv: check.inv === 0 ? 1 : 0 }));
    } else {
      setCheck((check) => ({ ...check, [item]: value }));
    }
  };

  const checkBoxes = [
    {
      id: 'first',
      title: 'View',
      items: ['All', 'Following', 'Mine'],
      inv: {
        className: 'check-box square',
        text: 'Invalidated',
        title: 'Apply the view to invalidated solutions',
      },
    },
    { id: 'second', title: 'SORT BY', items: ['Best Practice', 'Clever', 'Newest', 'Oldest'] },
  ];

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
              {checkBoxes.map((item, i) => (
                <>
                  <span className={i ? 'title bottom' : 'title'}>{item.title}</span>
                  <>
                    {item.items.map((text, idx) => (
                      <span
                        key={text}
                        className={
                          check[item.id as keyof InitialArray] === idx
                            ? 'check-box current'
                            : 'check-box'
                        }
                        onClick={() => setCheckBox(item.id, idx)}
                      >
                        <span className="item"></span>
                        <span className="text">{text}</span>
                      </span>
                    ))}
                    {item.inv ? (
                      <span
                        className={
                          check.inv === 1 ? 'check-box square current' : 'check-box square'
                        }
                        onClick={() => setCheckBox('inv')}
                      >
                        <span className="item"></span>
                        <span className="text">{item.inv.text}</span>
                        <span title={item.inv.title}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            fill="currentColor"
                            className="bi bi-question-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"></path>
                          </svg>
                        </span>
                      </span>
                    ) : null}
                  </>
                </>
              ))}
            </div>
            <div className="adds"></div>
            <div className="adds"></div>
          </div>
        </div>
        <div className="results">
          <div className="result"></div>
          <div className="result"></div>
          <div className="result"></div>
          <div className="result"></div>
          <div className="result"></div>
          <div className="result"></div>
          <div className="result"></div>
        </div>
      </div>
    </>
  );
};
