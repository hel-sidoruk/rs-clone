import React from 'react';
import { KataInfo } from './KataInfo';
import { KataLanguage } from './KataLanguage';

export const KataDescription = ({ handler }: { handler: () => void }) => {
  return (
    <div className="kata-description">
      <KataInfo />
      <KataLanguage status="solved" />
      <div className="controls">
        <div title="Maximize editor space" onClick={handler}>
          <div className="icon-container">
            <i className="icon-moon icon-moon-expand "></i>
          </div>
        </div>
      </div>
    </div>
  );
};
