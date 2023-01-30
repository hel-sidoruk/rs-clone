import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderHome = () => {
  return (
    <div className="header-home">
      <img src="/codewars.svg" alt="Codewars logo" />
      <div className="navbar_menu-buttons">
        <Link to="/users/login" className="header-home__btn">
          Log in
        </Link>
        <Link to="/users/registration" className="header-home__btn red">
          Join
        </Link>
      </div>
    </div>
  );
};
