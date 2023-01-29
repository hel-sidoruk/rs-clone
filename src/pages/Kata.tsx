import React from 'react';
import { Outlet } from 'react-router-dom';
import { KataDescription } from '../components/Kata/KataDescription';

export const Kata = () => {
  return (
    <main className="play-view">
      <h1 className="page-title">Kata</h1>
      <KataDescription />
      <Outlet />
    </main>
  );
};
