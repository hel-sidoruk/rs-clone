import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FeaturedTags } from '../components/FeaturedTags';
import Filters from '../components/Filters/Filters';
import { KataList } from '../components/Kata/KataList';
import Loader from '../components/UI/Loader';
import useTypedSelector from '../hooks/useTypedSelector';

export const KataLibrary = ({ title }: { title: string }) => {
  const { katas, totalCount, loading } = useTypedSelector((state) => state.katas);
  const { isAuthorized } = useTypedSelector((state) => state.authorizedUser);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
  }, [title]);
  useEffect(() => {
    if (!isAuthorized) navigate('/');
  }, [isAuthorized]);

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
          {loading && <Loader />}
          {katas.length ? <KataList /> : null}
        </div>
      </div>
    </main>
  );
};
