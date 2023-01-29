import React from 'react';
import { KataDescription } from '../components/Kata/KataDescription';
import { KataTrainingInfo } from '../components/KataTraining/KataTrainingInfo';
import { Solution } from '../components/Solution/Solution';

export const KataTraining = () => {
  return (
    <main className="play-view kata-training">
      <h1 className="page-title">Kata Training</h1>
      <KataDescription />
      <section className="kata-train">
        <KataTrainingInfo />
        <div className="kata-train__code">
          <Solution />
        </div>
      </section>
    </main>
  );
};
