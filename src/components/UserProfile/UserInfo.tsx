import React, { useEffect } from 'react';
import { SolutionsAPI } from '../../api/SolutionsAPI';
import useTypedSelector from '../../hooks/useTypedSelector';
import { FakeAvatar, Shield } from '../Icons';
import { Rank } from '../Kata/Rank';
import { FollowButton } from './FollowButton';

const UserInfo = () => {
  const { username } = useTypedSelector((state) => state.authorizedUser);
  const { currentUser } = useTypedSelector((state) => state.user);
  const isAuth = currentUser && currentUser.username === username;

  useEffect(() => {
    SolutionsAPI.getUserSolutions().then(console.log);
  }, []);

  return (
    <div className="user-profile__info user-info section">
      <div className="user-info__avatar">
        <FakeAvatar />
      </div>
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
      <div className="user-info__controls">{!isAuth && <FollowButton />}</div>
    </div>
  );
};
export default UserInfo;
