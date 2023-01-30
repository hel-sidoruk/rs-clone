import React from 'react';
import { KataInfo } from '../components/Kata/KataInfo';
import { TagsBlock } from '../components/Kata/TagsBlock';

export const KataLibrary = () => {
  const katas: JSX.Element[] = Array(10).fill(<KataInfo />);
  return (
    <main className="play-view">
      <h1 className="page-title">Kata Library</h1>
      <div className="library">
        <div className="library__container">
          <div className="library__header">Library</div>
          <div className="library__found">{katas.length} Kata Found</div>
          <div className="library__filters filters">filters</div>
          <div className="library__tags">tags</div>
          <div className="library__katas katas">
            {katas.map((kata, index) => (
              <div key={index} className="katas__item">
                {kata}
                <TagsBlock />
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    </main>
  );
};
