import React, { memo, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { KataInfo } from './KataInfo';
import { KataLanguage } from './KataLanguage';

export const KataDescription = memo(function KataDescription() {
  const [kata, setKata] = useState<KataInterface | null>(null);
  const { id } = useParams();
  const { katasByID } = useTypedSelector((state) => state.katas);
  useEffect(() => {
    if (katasByID && id) setKata(katasByID[id]);
  }, [katasByID, id]);

  return (
    <div className="kata-description section">
      {kata && (
        <>
          <KataInfo data={kata} />
          <KataLanguage status="trained" />
          <div className="kata__controls">
            <Link to={`/kata/${kata.id}/train`} className="btn btn-fill">
              <i className="icon-moon icon-moon-play"></i>
              Train
            </Link>
            <Link to="/kata/2" className="btn">
              <i className="icon-moon icon-moon-play"></i>
              Next kata
            </Link>
          </div>
        </>
      )}
    </div>
  );
});
