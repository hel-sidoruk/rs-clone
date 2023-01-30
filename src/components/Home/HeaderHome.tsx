import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DojoDropdown } from './DojoDropdown';

export const HeaderHome = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="header-home">
      <div className="header-home__logo">
        <img src="/codewars.svg" alt="Codewars logo" />
      </div>
      <nav className="header-home__nav">
        <DojoDropdown hidden={isAuth ? '' : 'hidden'} />
        {isAuth ? (
          <>
            <Link to="/kata" className="header-home__btn red">
              Enter the Dojo
            </Link>
          </>
        ) : (
          <div>
            <Link to="/login" className="header-home__btn">
              Log in
            </Link>
            <Link to="/registration" className="header-home__btn red">
              Join
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
