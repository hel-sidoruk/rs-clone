import React from 'react';

export const KataStats = () => {
  return (
    <div className="section kata-details">
      <h3 className="kata-details__title">Stats:</h3>
      <div className="kata-stats">
        <div className="kata-stats__block">
          <div className="kata-stats__item">
            <span>Created</span>
            <span>Sep 10, 2014</span>
          </div>
          <div className="kata-stats__item">
            <span>Published</span>
            <span>Sep 10, 2014</span>
          </div>
          <div className="kata-stats__item">
            <span>Warriors Trained</span>
            <span>5619</span>
          </div>
          <div className="kata-stats__item">
            <span>Total Skips</span>
            <span>197</span>
          </div>
          <div className="kata-stats__item">
            <span>Total Code Submissions</span>
            <span>9491</span>
          </div>
          <div className="kata-stats__item">
            <span>Total Times Completed</span>
            <span>4284</span>
          </div>
          <div className="kata-stats__item">
            <span>Total Stars</span>
            <span>57</span>
          </div>
        </div>
      </div>
    </div>
  );
};
