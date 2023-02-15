import React, { useEffect } from 'react';
import { SolutionsAPI } from '../../api/SolutionsAPI';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Shield } from '../Icons';
import { Rank } from '../Kata/Rank';
import { Avatar } from '../UI/Avatar';
import { FollowButton } from './FollowButton';

const UserInfo = () => {
  const { username } = useTypedSelector((state) => state.authorizedUser);
  const { currentUser, followers, following } = useTypedSelector((state) => state.user);
  const isAuth = currentUser && currentUser.username === username;

  useEffect(() => {
    SolutionsAPI.getUserSolutions().then(console.log);
  }, []);

  return (
    <div className="user-profile__info user-info">
      <Avatar src={currentUser?.avatar || ''} size="75px" />
      {currentUser && (
        <div className="user-info__badge">
          <div className="user-info__badge-box">
            <Rank rank={currentUser.rank}></Rank>
            {currentUser.username}
          </div>
          <div className="user-info__honor">{currentUser.honor}</div>
        </div>
      )}
      <div className="user-info__shield">
        <Shield />
        <div>mod</div>
      </div>
      <div className="user-info__col user-info__col_1">
        <div>
          <b>Name:</b>
          {currentUser ? currentUser.name : ''}
        </div>
        <div>
          <b>Clan:</b>
          {currentUser ? currentUser.clan : ''}
        </div>
      </div>
      <div className="user-info__col user-info__col_2">
        <div>
          <b>Member Since:</b>
          Oct 2023
        </div>
        <div>
          <b>Last Seen:</b>
          Feb 2023
        </div>
      </div>
      <div className="user-info__col user-info__col_3">
        <div>
          <b>Following:</b>
          {following.length}
        </div>
        <div>
          <b>Followers:</b>
          {followers.length}
        </div>
      </div>
      <div className="user-info__controls">{!isAuth && <FollowButton />}</div>
    </div>
  );
};
export default UserInfo;
