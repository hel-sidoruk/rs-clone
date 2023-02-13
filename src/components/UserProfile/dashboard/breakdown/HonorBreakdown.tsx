import React from 'react';

const HonorBreakdown = () => {
  return (
    <div className="honor-breakdown">
      <div className="stats__subtitle">
        <i className="icon-moon-honor icon-moon colored"></i>
        Honor Breakdown
      </div>
      <div className="honor-breakdown__list">
        <div className="honor-breakdown__item">Completed Kata (174)</div>
        <div className="honor-breakdown__item">Authored Kata & Translations (0)</div>
        <div className="honor-breakdown__item">Kumite (0)</div>
        <div className="honor-breakdown__item">Comments (0)</div>
        <div className="honor-breakdown__item">Solution Up Votes (0)</div>
        <div className="honor-breakdown__item">Referrals (0)</div>
        <div className="honor-breakdown__item">Achievements (50)</div>
      </div>
    </div>
  );
};

export default HonorBreakdown;
