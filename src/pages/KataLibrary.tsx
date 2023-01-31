import React from 'react';
import { FeaturedTags } from '../components/FeaturedTags';
import Filters from '../components/Filters/Filters';
import { KataInfo } from '../components/Kata/KataInfo';
import { TagsBlock } from '../components/Kata/TagsBlock';

export const KataLibrary = () => {
  const katas: JSX.Element[] = Array(10).fill(<KataInfo />);
  return (
    <main className="play-view">
      <h1 className="page-title">Kata Library</h1>
      <div className="library">
        <div className="library__container">
          <div className="library__header">
            <i className="icon-moon icon-moon-compare"></i>
            Library
          </div>
          <div className="library__found">{katas.length} Kata Found</div>
          <Filters />
          <div className="library__tags">
            <span>FEATURED TAGS</span>
            <FeaturedTags />
          </div>
          <div className="library__katas katas">
            {katas.map((kata, index) => (
              <div key={index} className="katas__item">
                {kata}
                <TagsBlock />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
