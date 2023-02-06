import React, { useState } from 'react';

const TestCases = () => {
  const [showCode, setShowCode] = useState(false);
  const openCode = (id: number) => {
    setShowCode(!showCode);
  };
  return (
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
  );
};

export default TestCases;
