import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_AVATAR } from '../../utils';
import { Rank } from '../Kata/Rank';

export const UserLink = ({ avatar, username }: { avatar: string | null; username: string }) => {
  return (
    <Link className="header__profile-link" to={`/users/${username}`}>
      <div className="profile-picture">
        <img alt="User avatar" src={avatar || DEFAULT_AVATAR} />
      </div>
      <div className="profile-points">
        <Rank rank="3 kyu" />
        1,502
      </div>
    </Link>
  );
};
