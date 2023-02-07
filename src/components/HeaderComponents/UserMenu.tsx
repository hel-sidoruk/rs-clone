import React from 'react';

export const UserMenu = () => {
  return (
    <div className="menu-body">
      <ul>
        <li>
          <a href="/users/rsschool_085c30fe4e1fbd81">
            <i className="icon-moon-user "></i>View Profile
          </a>
        </li>
        <li className="border-t">
          <a href="/users/edit">
            <i className="icon-moon-settings "></i>Account Settings
          </a>
        </li>
        <li>
          <a href="/trainer/setup">
            <i className="icon-moon-settings "></i>Training Setup
          </a>
        </li>
        <li className="border-t">
          <a className="js-sign-out">
            <i className="icon-moon-power "></i>Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};
