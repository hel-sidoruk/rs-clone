import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const HeaderHome = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="header-home">
      <img src="/codewars.svg" alt="Codewars logo" />
      <div className="navbar_menu-buttons">
        {isAuth ? (
          <>
            <Link to="/kata" className="header-home__btn red">
              Enter the Dojo
            </Link>
          </>
        ) : (
          <>
            <Link to="/users/login" className="header-home__btn">
              Log in
            </Link>
            <Link to="/users/registration" className="header-home__btn red">
              Join
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
