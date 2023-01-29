import React, { useState } from 'react';
import { KataDescription } from '../components/Kata/KataDescription';
import { KataTrainingInfo } from '../components/KataTraining/KataTrainingInfo';
import { Solution } from '../components/Solution/Solution';

export const KataTraining = () => {
  const [isHidden, setIsHidden] = useState(false);
  const handleClick = () => setIsHidden((value) => !value);
  return (
    <main className={`play-view kata-training ${isHidden ? 'hidden' : ''}`}>
      {!isHidden && (
        <>
          <h1 className="page-title">Kata Training</h1>
          <KataDescription handler={handleClick} />
        </>
      )}
      <section className="kata-train">
        <KataTrainingInfo solved handler={handleClick} isHidden={isHidden} />
        <div className="kata-train__code">
          <Solution />
        </div>
      </section>
    </main>
  );
};
