import React from 'react';
import { StarredKata, Notification } from './HeaderComponents';
import { HeaderProfile } from './HeaderComponents/HeaderProfile';

export const Header = () => {
  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__item">
          <a className="js-toggle-dark-mode w-6">
            <svg className="hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </a>
        </li>
        <li className="header__item starred">
          <i className="icon-moon icon-moon-bookmark"></i>
          <div className="header__menu starred-menu">
            <div className="header__menu-body">
              <ul>
                <StarredKata rank="8 kyu" title="Even or Odd" />
                <StarredKata rank="4 kyu" title="Codewars style ranking system" />
                <StarredKata rank="6 kyu" title="Add all" />
              </ul>
            </div>
          </div>
        </li>
        <li className="header__item notifications">
          <i className="icon-moon icon-moon-bell"></i>
          <div className="header__menu notifications-menu">
            <div className="header__menu-body">
              <ul>
                <Notification />
                <Notification />
              </ul>
            </div>
          </div>
        </li>
        <HeaderProfile />
      </ul>
    </header>
  );
};
