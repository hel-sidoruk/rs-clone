import React from 'react';
import { UserInterface } from '../../../../types/user';
import { FakeAvatar } from '../../../Icons';
import { Rank } from '../../../Kata/Rank';

const FollowItem = ({ user }: { user: UserInterface }) => {
  return (
    <div className="follow-list__item follow-user">
      <Rank rank={user.rank} />
      <FakeAvatar />
      <div className="follow-user__name">{user.username}</div>
      <div className="follow-user__clan">
        {user.clan && <i title="Clan" className="icon-moon-clan icon-moon"></i>}
        {user.clan}
      </div>
      <div className="follow-user__honor">{user.honor}</div>
    </div>
  );
};

export default FollowItem;
