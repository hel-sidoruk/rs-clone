import React, { useEffect, useState } from 'react';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';
import { CryptoIcon, DebugIcon, GameIcon, ScienceIcon, TutorIcon } from './Icons';

export const FeaturedTags = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const { addFeatureTags } = useActions();
  const { features } = useTypedSelector((state) => state.filters);

  function checkTag(tag: string) {
    if (selected.includes(tag)) {
      const index = selected.indexOf(tag);
      const push = [...selected.slice(0, index), ...selected.slice(index + 1)];
      setSelected([...push]);
    } else setSelected([...selected, tag]);
  }

  function addActive(tag: string) {
    return selected.includes(tag) ? ' _active' : '';
  }

  useEffect(() => {
    addFeatureTags(selected);
  }, [selected]);

  useEffect(() => {
    setSelected(features);
  }, [features]);

  return (
    <ul className="f-tags">
      <li
        className={`f-tags__item${addActive('Logic')}`}
        onClick={() => {
          checkTag('Logic');
        }}
      >
        <CryptoIcon />
        <span>Logic</span>
      </li>
      <li
        className={`f-tags__item${addActive('Mathematics')}`}
        onClick={() => {
          checkTag('Mathematics');
        }}
      >
        <ScienceIcon />
        <span>Mathematics</span>
      </li>
      <li
        className={`f-tags__item${addActive('Debugging')}`}
        onClick={() => {
          checkTag('Debugging');
        }}
      >
        <DebugIcon />
        <span>Debugging</span>
      </li>
      <li
        className={`f-tags__item${addActive('Games')}`}
        onClick={() => {
          checkTag('Games');
        }}
      >
        <GameIcon />
        <span>Games</span>
      </li>
      <li
        className={`f-tags__item${addActive('Fundamentals')}`}
        onClick={() => {
          checkTag('Fundamentals');
        }}
      >
        <TutorIcon />
        <span>Fundamentals</span>
      </li>
    </ul>
  );
};
