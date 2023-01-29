import React from 'react';
import { Outlet } from 'react-router-dom';
import { KataControls } from '../components/Kata/KataControls';
import { KataDescription } from '../components/Kata/KataDescription';
import { KataInstructions } from '../components/KataTraining/KataInstructions';

export const Kata = () => {
  return (
    <main className="play-view">
      <h1 className="page-title">Kata</h1>
      <KataDescription />
      <KataControls />
      <div className="section kata-details">
        <h3 className="kata-details__title">Description:</h3>
        <KataInstructions />
      </div>
      <Outlet />
    </main>
  );
};
