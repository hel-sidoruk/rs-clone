import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { KataAPI } from '../../api';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { Rank } from '../Kata/Rank';

export const StarredKata = ({ id }: { id: string }) => {
  const [kata, setKata] = useState<KataInterface | null>(null);
  const { katasByID } = useTypedSelector((state) => state.katas);
  useEffect(() => {
    if (katasByID) {
      if (katasByID[id]) setKata(katasByID[id]);
      else KataAPI.getOne(id).then((res) => setKata(res));
    }
  }, [katasByID]);

  return (
    <li>
      <Link className="header__menu-item link" to={`/kata/${id}`}>
        {kata && (
          <>
            <Rank rank={kata.rank} />
            <span className="link-title">{kata.name}</span>
          </>
        )}
      </Link>
    </li>
  );
};
