import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ArrowIcon } from '../components/Icons/ArrowIcon';
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
          <div className="toggle-block__header" onClick={() => setIsHidden((state) => !state)}>
            <h3 className="toggle-block__title">Description</h3>
            <ArrowIcon />
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
