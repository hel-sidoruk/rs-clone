import React from 'react';
import { Link } from 'react-router-dom';
import { Rank } from '../Kata/Rank';

export const StarredKata = ({ rank, title }: { rank: string; title: string }) => {
  return (
    <li>
      <Link className="link" to="/kata/53da3dbb4a5168369a0000fe">
        <Rank rank={rank} />
        <span>{title}</span>
      </Link>
    </li>
  );
};
