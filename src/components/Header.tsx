import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';
import { HeaderProfile, NotificationsList, StarredKatasList } from './HeaderComponents';

export const Header = () => {
  const { isAuthorized } = useTypedSelector((state) => state.authorizedUser);
  const { fetchNotifications } = useActions();

  useEffect(() => {
    fetchNotifications();
  }, []);

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
        {isAuthorized ? (
          <>
            <li className="header__item starred">
              <i className="icon-moon icon-moon-bookmark"></i>
              <StarredKatasList />
            </li>
            <li className="header__item notifications">
              <i className="icon-moon icon-moon-bell"></i>
              <NotificationsList />
            </li>
            <HeaderProfile />
          </>
        ) : (
          <li className="header__buttons">
            <Link to="/login" className="btn">
              Log in
            </Link>
            <Link to="/registration" className="btn btn-fill">
              Sign up
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};
