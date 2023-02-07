import React from 'react';
import { Link } from 'react-router-dom';

export const UserMenu = () => {
  return (
    <div className="header__menu-body">
      <ul>
        <li className="border-bottom">
          <Link className="header__menu-item" to="/users/rsschool_085c30fe4e1fbd81">
            <i className="icon-moon icon-moon-user "></i>View Profile
          </Link>
        </li>
        <li className="border-bottom">
          <Link className="header__menu-item" to="/users/edit">
            <i className="icon-moon icon-moon-settings "></i>Account Settings
          </Link>
        </li>
        <li>
          <Link to="/login" className="header__menu-item">
            <i className="icon-moon icon-moon-power "></i>Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};
