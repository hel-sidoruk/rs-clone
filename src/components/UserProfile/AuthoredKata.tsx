import React from 'react';

const AuthoredKata = () => {
  return (
    <div className="stats__kata">
      <div className="stats__subtitle">
        <i className="icon-moon-compare icon-moon colored"></i>
        Authored Kata:
      </div>
      <div>
        <span>Created:</span> 142 (2 in beta)
      </div>
      <div>
        <span>Total Completions:</span> 1,960,288
      </div>
      <div>
        <span>Total Stars:</span> 87,189
      </div>
      <div>
        <span>Total Collected:</span> 16,770
      </div>
      <div>
        <span>Avg. Rank:</span> 5 kyu
      </div>
      <div>
        <span>Avg. Satisfaction Rating:</span> 84%
      </div>
    </div>
  );
};
export default AuthoredKata;
