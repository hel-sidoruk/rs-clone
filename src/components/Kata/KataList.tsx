import React from 'react';
import useInfiniteList from '../../hooks/useInfiniteList';
import useTypedSelector from '../../hooks/useTypedSelector';
import Loader from '../UI/Loader';
import { KataInfo } from './KataInfo';
import { KataLanguage } from './KataLanguage';
import { TagsBlock } from './TagsBlock';

export const KataList = () => {
  const { katas, loading } = useTypedSelector((state) => state.katas);
  const [intersectedRef] = useInfiniteList();

  return (
    <div className="library__katas katas">
      {katas.map((kata, index) => (
        <div key={index} className="katas__item kata-item">
          <div className="kata-item__wrap">
            <KataInfo data={kata} />
            <TagsBlock tags={kata.tags} />
          </div>
          <KataLanguage kataId={kata.id} />
        </div>
      ))}
      <div className="library__loader" ref={intersectedRef}>
        {loading && <Loader />}
      </div>
    </div>
  );
};
