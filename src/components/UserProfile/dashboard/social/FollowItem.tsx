import React from 'react';
import { FollowerInterface } from '../../../../types/followers';
import { FakeAvatar } from '../../../Icons';
import { Rank } from '../../../Kata/Rank';

const FollowItem = ({ user }: { user: FollowerInterface }) => {
  return (
    <div className="follow-list__item follow-user">
      <Rank rank={user.rank} />
      <FakeAvatar />
      <div className="follow-user__name">{user.followUser}</div>
      <div className="follow-user__clan">
        {user.clan && <i title="Clan" className="icon-moon-clan icon-moon"></i>}
        {user.clan}
      </div>
      <div className="follow-user__honor">{user.honor}</div>
    </div>
  );
};

export default FollowItem;
