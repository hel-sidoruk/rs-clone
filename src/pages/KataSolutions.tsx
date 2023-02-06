import React, { useState } from 'react';
import KataSolutionItem from '../components/Kata/kataSolutionItem';
import Adds from '../components/Kata/adds';
import LeftBarForSolutions from '../components/Kata/leftBarForSolutions';

const add = [
  {
    href: 'https://www.codewars.com/post/8-reasons-why-codewarriors-practice-coding-with-codewars',
    img: 'https://uploads-ssl.webflow.com/62e95dddfb380a0e61193e7d/6363e7db70db732290fa3db6_logo-256.png',
    title: '8 Reasons Why Codewarriors Practice Coding with Codewars',
    description:
      'Not everyone trains the same. Discover new ways to leverage Codewars in your education and career.',
  },
  {
    href: 'https://www.codewars.com/post/10-traits-employers-look-for-when-hiring-software-engineers',
    img: 'https://uploads-ssl.webflow.com/62e95dddfb380a0e61193e7d/6397a637b0034f276c24d9fe_62f25d9703388a1bef8320f8_62d5c7124ddf80d307192793_AdobeStock_164314960%2520(1)-p-2600%201.png',
    title: '10 Traits Employers Look for When Hiring Software Engineers',
    description:
      'Codewars CEO Jake Hoffner breaks down the 10 traits he looks for in software engineers.',
  },
];

export const KataSolutions = () => {
  const [showCode, setShowCode] = useState(false);

  const openCode = (id: number) => {
    setShowCode(!showCode);
  };

  return (
    <>
      <div className="section _test-cases">
        <div className="_header" onClick={() => openCode(22)}>
          <div className="header-items">
            <span className="span">Test Cases</span>
            <div className={showCode ? 'arrow open' : 'arrow'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
            </div>
          </div>
          <div className={showCode ? 'code open' : 'code'}>
            <pre className="code-area">
              <code data-language="javascript"></code>
            </pre>
          </div>
        </div>
      </div>
      <div className="section solution-main">
        <div className="left-bar">
          <div className="left-bar-items">
            <LeftBarForSolutions />
            {add.map((item, idx) => (
              <Adds key={idx} data={item} />
            ))}
          </div>
        </div>
        <div className="results">
          {add.map((item, idx) => (
            <KataSolutionItem key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};
