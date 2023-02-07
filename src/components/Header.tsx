import React from 'react';
import { StarredKata, UserLink, UserMenu, Notification } from './HeaderComponents';

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
          <i className="icon-moon icon-moon-bookmark text-2xl"></i>
          <div className="header__menu starred-menu">
            <div className="header__menu-body">
              <ul className="space-y">
                <StarredKata rank="8 kyu" title="Even or Odd" />
                <StarredKata rank="4 kyu" title="Codewars style ranking system" />
                <StarredKata rank="6 kyu" title="Add all" />
              </ul>
            </div>
          </div>
        </li>
        <li className="header__item">
          <a>
            <i className="icon-moon icon-moon-bell text-2xl"></i>
          </a>
          {/* <div className="menu right-0 shadow-lg">
            <div className="menu-body">
              <div className="notifications-body">
                <ul className="divide-y">
                  <Notification />
                </ul>
              </div>
            </div>
          </div> */}
        </li>
        <li className="header__profile">
          <UserLink />
          {/* <div className="menu shadow-lg">
            <UserMenu />
          </div> */}
        </li>
      </ul>
    </header>
  );
};
