import React from 'react';
import { Link } from 'react-router-dom';
import { Rank } from '../Kata/Rank';

export const Notification = () => {
  return (
    <li className="notification header__menu-item">
      <div className="notification__top">
        <Rank rank="3 kyu" />
        <Link className="link" to="/users/63256c43dfffbe00584b658c">
          Respect. You have ranked up to 3 kyu in JavaScript.
        </Link>
      </div>
      <div>2 days ago</div>
    </li>
  );
};
