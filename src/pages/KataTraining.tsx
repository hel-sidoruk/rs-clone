import React, { useState } from 'react';
import { KataTrainingDescription } from '../components/KataTraining/KataTrainingDescription';
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
          <KataTrainingDescription handler={handleClick} />
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
