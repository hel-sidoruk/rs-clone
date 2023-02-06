import React, { memo, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { KataAPI } from '../../api';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { KataInfo } from './KataInfo';
import { KataLanguage } from './KataLanguage';
import _ from 'lodash';

export const KataDescription = memo(function KataDescription() {
  const [kata, setKata] = useState<KataInterface | null>(null);
  const { id } = useParams();
  const { katasByID } = useTypedSelector((state) => state.katas);
  const { solvedKatas, trainedKatas } = useTypedSelector((state) => state.account);
  const [nextKataID, setNextKataID] = useState('');
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    if (id && katasByID) {
      if (katasByID[id]) setKata(katasByID[id]);
      else KataAPI.getOne(id).then((kata) => setKata(kata));
      const restIds = Object.keys(katasByID).filter((el) => el !== id);
      setNextKataID(() => _.shuffle(restIds)[0]);
    }
    if (id && (solvedKatas?.includes(id) || trainedKatas?.includes(id))) setIsSolved(true);
  }, [id, katasByID, solvedKatas, trainedKatas]);

  return (
    <div className="kata-description section">
      {kata && (
        <>
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
        </>
      )}
    </div>
  );
});
