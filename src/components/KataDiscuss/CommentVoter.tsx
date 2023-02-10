import React from 'react';

export const CommentVoter = () => {
  return (
    <div className="voter">
      <span className="voter__score">1</span>
      <span className="vote voter__up link">
        <i className="icon-moon-up icon-moon"></i>
      </span>
      <span className="spacer">|</span>
      <span className="vote voter__down link">
        <i className="icon-moon-down icon-moon"></i>
      </span>
    </div>
  );
};
