import React from 'react';
import { Link } from 'react-router-dom';
import { Rank } from '../Kata/Rank';

export const StarredKata = ({ rank, title }: { rank: string; title: string }) => {
  return (
    <li>
      <Link className="header__menu-item link" to="/kata/53da3dbb4a5168369a0000fe">
        <Rank rank={rank} />
        <span className="link-title">{title}</span>
      </Link>
    </li>
  );
};
