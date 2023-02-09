import React from 'react';
import { UserInterface } from '../../types/user';
import { FakeAvatar, Shield } from '../Icons';
import { Rank } from '../Kata/Rank';

const UserInfo = ({ user }: { user: UserInterface }) => {
  return (
    <div className="user-profile__info user-info">
      <div className="user-info__avatar">
        <FakeAvatar />
      </div>
      <div className="user-info__badge">
        <div className="user-info__badge-box">
          <Rank rank={user.rank}></Rank>
          {user.username}
        </div>
        <div className="user-info__honor">{user.honor}</div>
      </div>
      <div className="user-info__shield">
        <Shield />
        <div>mod</div>
      </div>
      <div className="user-info__col user-info__col_1">
        <div>
          <b>Name:</b>
          {user.name}
        </div>
        <div>
          <b>Clan:</b>
          {user.clan}
        </div>
      </div>
      <div className="user-info__col user-info__col_2">
        <div>
          <b>Member Since:</b>
          Oct 2014
        </div>
        <div>
          <b>Last Seen:</b>
          Feb 2023
        </div>
        <div>
          <b>Profiles:</b>
        </div>
      </div>
      <div className="user-info__col user-info__col_3">
        <div>
          <b>Following:</b>
          1,624
        </div>
        <div>
          <b>Followers:</b>
          6,468
        </div>
        <div>
          <b>Allies</b>
          1,556
        </div>
      </div>
      <div className="user-info__controls"></div>
    </div>
  );
};
export default UserInfo;
