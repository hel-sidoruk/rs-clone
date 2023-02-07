import React from 'react';
import { Link } from 'react-router-dom';
import { Rank } from '../Kata/Rank';

export const UserLink = () => {
  return (
    <Link className="header__profile-link" to="/users/rsschool_085c30fe4e1fbd81">
      <div className="profile-picture">
        <img alt="User avatar" src="https://avatars.githubusercontent.com/u/105039101?s=100" />
      </div>
      <div className="profile-points">
        <Rank rank="3 kyu" />
        <div className="ml-10px is-inline" data-rt="63256c43dfffbe00584b658c:honor">
          1,502
        </div>
      </div>
    </Link>
  );
};
