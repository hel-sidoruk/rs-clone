import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { KataControls } from '../components/Kata/KataControls';
import { KataDescription } from '../components/Kata/KataDescription';
import { KataInstructions } from '../components/KataTraining/KataInstructions';

export const Kata = () => {
  const { pathname } = useLocation();
  const [shouldHide, setShouldHide] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setShouldHide(pathname.endsWith('/discuss') || pathname.endsWith('/solutions') ? true : false);
    setIsHidden(true);
  }, [pathname]);

  return (
    <main className="play-view">
      <h1 className="page-title">Kata</h1>
      <KataDescription />
      <KataControls />
      {shouldHide ? (
        <div className={`section kata-details kata-hide ${isHidden ? 'hide' : ''}`}>
          <div className="kata-details__header" onClick={() => setIsHidden((state) => !state)}>
            <h3 className="kata-details__title">Description</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </div>
          <KataInstructions />
        </div>
      ) : (
        <div className="section kata-details">
          <h3 className="kata-details__title">Description:</h3>
          <KataInstructions />
        </div>
      )}
      <Outlet />
    </main>
  );
};
