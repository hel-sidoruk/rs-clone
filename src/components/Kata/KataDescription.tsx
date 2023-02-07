import React, { memo, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { KataInfo } from './KataInfo';
import { KataLanguage } from './KataLanguage';
import _ from 'lodash';

export const KataDescription = memo(function KataDescription({ kata }: { kata: KataInterface }) {
  const { id } = useParams();
  const { katasByID } = useTypedSelector((state) => state.katas);
  const { solvedKatas, trainedKatas } = useTypedSelector((state) => state.account);
  const [nextKataID, setNextKataID] = useState('');
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    if (id && katasByID) {
      const restIds = Object.keys(katasByID).filter((el) => el !== id);
      setNextKataID(() => _.shuffle(restIds)[0]);
    }
    if (id && (solvedKatas?.includes(id) || trainedKatas?.includes(id))) setIsSolved(true);
  }, [id, katasByID, solvedKatas, trainedKatas]);

  return (
    <div className="kata-description section">
      <KataInfo data={kata} />
      <KataLanguage />
      <div className="kata__controls">
        <Link to={`/kata/${kata.id}/train`} className={`btn ${isSolved ? '' : 'btn-fill'}`}>
          {isSolved ? (
            <i className="icon-moon icon-moon-refresh"></i>
          ) : (
            <i className="icon-moon icon-moon-play"></i>
          )}
          {isSolved ? 'Train again' : 'Train'}
        </Link>
        <Link to={`/kata/${nextKataID}`} className={`btn ${isSolved ? 'btn-fill' : ''}`}>
          <i className="icon-moon icon-moon-play"></i>
          Next kata
        </Link>
      </div>
    </div>
  );
});
