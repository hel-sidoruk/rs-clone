import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { KataInfo } from './KataInfo';
import { KataLanguage } from './KataLanguage';

export const KataDescription = memo(function KataDescription() {
  return (
    <div className="kata-description section">
      <KataInfo />
      <KataLanguage status="trained" />
      <div className="kata__controls">
        <Link to="/kata/1/train" className="btn btn-fill">
          <i className="icon-moon icon-moon-play"></i>
          Train
        </Link>
        <Link to="/kata/2" className="btn">
          <i className="icon-moon icon-moon-play"></i>
          Next kata
        </Link>
      </div>
    </div>
  );
});
