import React from 'react';
import { Link } from 'react-router-dom';
import { CommentVoter } from './CommentVoter';

export const Comment = () => {
  return (
    <div className="comment">
      <Link className="avatar" to="/users/Unnamed">
        <img
          alt="Unnamed Avatar"
          src="https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png"
        />
      </Link>
      <div className="comment__content">
        <div className="comment__header">
          <Link className="link" to="/users/Unnamed">
            Unnamed
          </Link>
          <span className="comment__rank">(1 dan)</span>
          <div className="bullet"></div>
          <div>3 hours ago</div>
          <div className="keyword-tag issue">Issue</div>
        </div>
        <div className="comment__body">
          <p>It not clear if input contains only ASCII characters.</p>
        </div>

        <div className="comment__actions">
          <CommentVoter />
          <div className="bullet"></div>
          <div className="link">
            <i className="icon-moon-flag icon-moon"></i>
            <span>Spoiler</span>
          </div>
        </div>
      </div>
    </div>
  );
};
