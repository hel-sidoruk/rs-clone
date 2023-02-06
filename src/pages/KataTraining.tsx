import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { KataTrainingDescription } from '../components/KataTraining/KataTrainingDescription';
import { KataTrainingInfo } from '../components/KataTraining/KataTrainingInfo';
import { Solution } from '../components/Solution/Solution';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

export const KataTraining = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { id } = useParams();
  const { markAsTrained } = useActions();
  const handleClick = () => setIsHidden((value) => !value);
  const [isSolved, setIsSolved] = useState(false);
  const { trainedKatas, solvedKatas } = useTypedSelector((state) => state.account);

  useEffect(() => {
    if (id) {
      if (!trainedKatas?.includes(id) && !solvedKatas?.includes(id)) markAsTrained(id);
      if (solvedKatas?.includes(id)) setIsSolved(true);
    }
  }, [solvedKatas, trainedKatas]);

  return (
    <main className={`play-view kata-training ${isHidden ? 'hidden' : ''}`}>
      {!isHidden && (
        <>
          <h1 className="page-title">Kata Training</h1>
          <KataTrainingDescription handler={handleClick} />
        </>
      )}
      <section className="kata-train">
        <KataTrainingInfo solved={isSolved} handler={handleClick} isHidden={isHidden} />
        <div className="kata-train__code">
          <Solution />
        </div>
      </section>
    </main>
  );
};
