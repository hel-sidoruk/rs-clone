import React from 'react';
import { Outlet } from 'react-router-dom';

export const Kata = () => {
  return (
    <main className="play-view">
      <h1 className="page-title">Kata</h1>
      <Outlet />
    </main>
  );
};
