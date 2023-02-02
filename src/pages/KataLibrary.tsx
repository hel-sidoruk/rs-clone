import React from 'react';
import { FeaturedTags } from '../components/FeaturedTags';
import Filters from '../components/Filters/Filters';
import { KataInfo } from '../components/Kata/KataInfo';
import { TagsBlock } from '../components/Kata/TagsBlock';
import useTypedSelector from '../hooks/useTypedSelector';

export const KataLibrary = () => {
  const { katas, loading } = useTypedSelector((state) => state.katas);
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
            {katas.length &&
              katas.map((kata, index) => (
                <div key={index} className="katas__item">
                  <KataInfo data={kata} />
                  <TagsBlock tags={kata.tags} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};
