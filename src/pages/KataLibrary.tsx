import React from 'react';
import { FeaturedTags } from '../components/FeaturedTags';
import Filters from '../components/Filters/Filters';
import { KataList } from '../components/Kata/KataList';
import useTypedSelector from '../hooks/useTypedSelector';

export const KataLibrary = () => {
  const { katas, loading, totalCount } = useTypedSelector((state) => state.katas);

  return (
    <main className="play-view">
      <h1 className="page-title">Kata Library</h1>
      <div className="library">
        <div className="library__container">
          <div className="library__header">
            <i className="icon-moon icon-moon-compare"></i>
            Library
          </div>
          <div className="library__found">{totalCount} Kata Found</div>
          <Filters />
          <div className="library__tags">
            <span>FEATURED TAGS</span>
            <FeaturedTags />
          </div>
          {katas.length && <KataList />}
        </div>
      </div>
    </main>
  );
};
