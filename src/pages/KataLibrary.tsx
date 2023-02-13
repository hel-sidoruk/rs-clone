import React, { useEffect } from 'react';
import Article from '../components/Article';
import { FeaturedTags } from '../components/FeaturedTags';
import Filters from '../components/Filters/Filters';
import { ShuffleIcon } from '../components/Icons/ShuffleIcon';
import { KataList } from '../components/Kata/KataList';
import Loader from '../components/UI/Loader';
import useTypedSelector from '../hooks/useTypedSelector';

export const KataLibrary = ({ title }: { title: string }) => {
  const { katas, totalCount, loading } = useTypedSelector((state) => state.katas);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <main className="play-view">
      <h1 className="page-title">Kata Library</h1>
      <div className="library">
        <div className="library__container">
          <div className="library__header">
            <i className="icon-moon icon-moon-compare"></i>
            Library
          </div>
          <div className="library__controls">
            <span>{totalCount} Kata Found</span>
            <button className="shuffle-btn">
              <span className="shuffle-btn__tooltip">Random sample</span>
              <ShuffleIcon />
            </button>
          </div>
          <div className="library__bar">
            <Filters />
            <Article />
            <Article />
          </div>
          <div className="library__tags">
            <span>FEATURED TAGS</span>
            <FeaturedTags />
          </div>
          {loading && <Loader />}
          {katas.length ? <KataList /> : null}
        </div>
      </div>
    </main>
  );
};
