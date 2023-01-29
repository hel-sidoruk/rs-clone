import React from 'react';
import { Link } from 'react-router-dom';

export const KataInfo = () => {
  return (
    <div className="kata__info">
      <div className="kata__info-top">
        <div className="rank yellow">
          <div className="rank__inner">
            <span>6 kyu</span>
          </div>
        </div>
        <h4 className="kata__info-title">Convert string to camel case</h4>
      </div>
      <div className="kata__info-bottom">
        <span className="kata__info-text star">
          <i className="icon-moon icon-moon-star"></i>
          2418
        </span>
        <span className="kata__info-text">
          <i className="icon-moon icon-moon-bullseye"></i>
          46,786 of 135,255
        </span>
        <Link to={`/users/${1}`} className="kata__info-text link">
          <i className="icon-moon icon-moon-user"></i>
          username
        </Link>
      </div>
    </div>
  );
};
