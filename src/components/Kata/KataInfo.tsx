import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { Rank } from './Rank';

export const KataInfo = () => {
  const { id } = useParams();
  const { katas } = useTypedSelector((state) => state.katas);
  const [kata, setKata] = useState<KataInterface | null>(null);

  useEffect(() => {
    if (katas && id) setKata(katas[id]);
  }, [katas]);

  return (
    <div className="kata__info">
      {kata && (
        <>
          <div className="kata__info-top">
            <Rank rank={parseInt(kata.rank)} />
            <h4 className="kata__info-title">{kata.name}</h4>
          </div>
          <div className="kata__info-bottom">
            <span className="kata__info-text star">
              <i className="icon-moon icon-moon-star"></i>
              {kata.totalStars}
            </span>
            <span className="kata__info-text">
              <i className="icon-moon icon-moon-bullseye"></i>
              {kata.totalCompleted} of {kata.totalAttempts}
            </span>
            <Link to={`/users/${kata.createdBy}`} className="kata__info-text link">
              <i className="icon-moon icon-moon-user"></i>
              {kata.createdBy}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
