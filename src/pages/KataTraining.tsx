import React from 'react';
import { Solution } from '../components/Solution/Solution';

export const KataTraining = () => {
  return (
    <main className="play-view">
      <div className="top"></div>
      <section className="kata-train">
        <div className="kata-train__descr"></div>
        <div className="kata-train__code">
          <Solution />
        </div>
      </section>
    </main>
  );
};
