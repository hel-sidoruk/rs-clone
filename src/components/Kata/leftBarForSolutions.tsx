import React, { useState } from 'react';
import Article from '../Article';

interface InitialArray {
  first: number;
  second?: number;
  inv: number;
}

const checkBoxes = [
  [
    {
      id: 'first',
      title: 'View',
      items: ['All', 'Following', 'Mine'],
      inv: {
        text: 'Invalidated',
        title: 'Apply the view to invalidated solutions',
      },
    },
    { id: 'second', title: 'SORT BY', items: ['Best Practice', 'Clever', 'Newest', 'Oldest'] },
  ],
  [
    {
      id: 'first',
      title: 'View',
      items: ['All', 'Issue', 'Questions', 'Suggestions'],
      inv: {
        text: 'Show Resolved',
        title: '',
      },
    },
  ],
];

const LeftBarForSolutions = ({ sol }: { sol: boolean }) => {
  const [check, setCheck] = useState({ first: 0, second: 0, inv: 0 } as InitialArray);
  const currentOutlet = sol ? 0 : 1;
  const setCheckBox = (item: string, value = 0) => {
    if (item === 'inv') {
      setCheck((check) => ({ ...check, inv: check.inv === 0 ? 1 : 0 }));
    } else {
      setCheck((check) => ({ ...check, [item]: value }));
    }
  };

  return (
    <div className="left-bar">
      <div className="left-bar__items">
        <div className="sort">
          {checkBoxes[currentOutlet].map((item, i) => (
            <span key={i}>
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
                {item.inv && (
                  <span
                    className={check.inv === 1 ? 'check-box square current' : 'check-box square'}
                    onClick={() => setCheckBox('inv')}
                  >
                    <span className="item"></span>
                    <span className="text">{item.inv.text}</span>
                    {item.inv.title && (
                      <span title={item.inv.title} className="question-mark">
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
                    )}
                  </span>
                )}
              </>
            </span>
          ))}
        </div>
        <Article />
        <Article />
      </div>
    </div>
  );
};

export default LeftBarForSolutions;
