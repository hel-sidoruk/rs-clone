import React from 'react';
import { KataInfo } from './KataInfo';
import { KataLanguage } from './KataLanguage';

export const KataDescription = () => {
  return (
    <div className="kata-description">
      <KataInfo />
      <KataLanguage status="solved" />
      <div className="controls"></div>
    </div>
  );
};
