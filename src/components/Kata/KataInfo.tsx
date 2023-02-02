import React from 'react';
import { Link } from 'react-router-dom';
import { KataInterface } from '../../types/kata';
import { Rank } from './Rank';

export const KataInfo = ({ data }: { data: KataInterface }) => {
  return (
    <div className="kata__info">
      <div className="kata__info-top">
        <Rank rank={data.rank} />
        <h4 className="kata__info-title">
          <Link to={`/kata/${data.id}`}>{data.name}</Link>
        </h4>
      </div>
      <div className="kata__info-bottom">
        <span className="kata__info-text star">
          <i className="icon-moon icon-moon-star"></i>
          {data.totalStars}
        </span>
        <span className="kata__info-text">
          <i className="icon-moon icon-moon-bullseye"></i>
          {`${data.totalCompleted} of ${data.totalAttempts}`}
        </span>
        <Link to={`/users/${data.createdBy}`} className="kata__info-text link">
          <i className="icon-moon icon-moon-user"></i>
          {data.createdBy}
        </Link>
      </div>
    </div>
  );
};
