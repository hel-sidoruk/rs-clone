import React from 'react';
import { Link } from 'react-router-dom';
import { UserInterface } from '../../types/user';
import { FakeAvatar } from '../Icons';
import { Rank } from '../Kata/Rank';

const LeaderItem = ({ user, index }: { user: UserInterface; index: number }) => {
  return (
    <div className="leader-table__tr" key={user.id}>
      <div className="leader-table__td leader-table__td_position">#{index + 1}</div>
      <div className="leader-table__td">
        <Rank rank={user.rank}></Rank>
        <Link className="leader-table__link" to={`/users/${user.id}/stats`}>
          <div className="leader-table__avatar">
            <FakeAvatar />
          </div>
          <div className="leader-table__username">{user.username}</div>
        </Link>
      </div>
      <div className="leader-table__td">{user.clan}</div>
      <div className="leader-table__td">{user.honor}</div>
    </div>
  );
};
export default LeaderItem;
