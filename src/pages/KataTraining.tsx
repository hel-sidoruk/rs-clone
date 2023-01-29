import React from 'react';
import { KataDescription } from '../components/Kata/KataDescription';
import { Solution } from '../components/Solution/Solution';

export const KataTraining = () => {
  return (
    <main className="play-view">
      <h1 className="page-title">Kata Training</h1>
      <div className="top">
        <KataDescription />
      </div>
      <section className="kata-train">
        <div className="kata-train__descr"></div>
        <div className="kata-train__code">
          <Solution />
        </div>
      </section>
    </main>
  );
};
