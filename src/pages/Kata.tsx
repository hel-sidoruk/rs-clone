import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { ArrowIcon } from '../components/Icons/ArrowIcon';
import { KataControls } from '../components/Kata/KataControls';
import { KataDescription } from '../components/Kata/KataDescription';
import { KataStats } from '../components/Kata/KataStats';
import { SimilarKatas } from '../components/Kata/SimilarKatas';
import { KataInstructions } from '../components/KataTraining/KataInstructions';
import { useFetchKata } from '../hooks/useFetchKata';

export const Kata = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [shouldHide, setShouldHide] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [kata] = useFetchKata(id as string);

  useEffect(() => {
    setShouldHide(pathname.endsWith('/discuss') || pathname.endsWith('/solutions'));
    setIsHidden(true);
  }, [pathname]);

  useEffect(() => {
    if (kata) document.title = `${kata.name} | Codewars Clone`;
  }, [kata]);

  return (
    <main className="play-view">
      <h1 className="page-title">Kata</h1>
      {kata && <KataDescription kata={kata} />}
      <KataControls />
      {shouldHide ? (
        <div className={`section kata-details kata-hide ${isHidden ? 'hide' : ''}`}>
          <div className="toggle-block__header" onClick={() => setIsHidden((state) => !state)}>
            <h3 className="toggle-block__title">Description</h3>
            <ArrowIcon />
          </div>
          {kata && <KataInstructions description={kata.description} tags={kata.tags} />}
        </div>
      ) : (
        <>
          <div className="section kata-details">
            <h3 className="kata-details__title">Description:</h3>
            {kata && <KataInstructions description={kata.description} tags={kata.tags} />}
          </div>
          <SimilarKatas />
          <KataStats />
        </>
      )}
      <Outlet />
    </main>
  );
};
