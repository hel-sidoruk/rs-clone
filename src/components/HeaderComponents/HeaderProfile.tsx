import React from 'react';
import { UserLink, UserMenu } from '.';

export const HeaderProfile = () => {
  return (
    <li className="header__profile">
      <UserLink />
      <div className="header__menu profile-menu">
        <UserMenu />
      </div>
    </li>
  );
};
