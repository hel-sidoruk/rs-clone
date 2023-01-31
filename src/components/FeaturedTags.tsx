import React from 'react';
import { CryptoIcon, DebugIcon, GameIcon, ScienceIcon, TutorIcon } from './Icons';

export const FeaturedTags = () => {
  return (
    <ul className="f-tags">
      <li className="f-tags__item">
        <CryptoIcon />
        <span>Cryptography</span>
      </li>
      <li className="f-tags__item">
        <ScienceIcon />
        <span>Data Science</span>
      </li>
      <li className="f-tags__item">
        <DebugIcon />
        <span>Debugging</span>
      </li>
      <li className="f-tags__item">
        <GameIcon />
        <span>Games</span>
      </li>
      <li className="f-tags__item">
        <TutorIcon />
        <span>Tutorials</span>
      </li>
    </ul>
  );
};
