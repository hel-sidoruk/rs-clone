import React from 'react';
import Article from '../components/Article';
import ReferalBlock from '../components/UserProfile/ReferalBlock';
import UserInfo from '../components/UserProfile/UserInfo';
import { UserInterface } from '../types/user';
import UserStats from '../components/UserProfile/UserStats';

const user: UserInterface = {
  id: '545207bac8e60b30fc000942',
  name: 'unknown',
  leaderboardPosition: 1,
  username: 'g964',
  honor: 419670,
  clan: 'None',
  totalCompleted: 2644,
  rank: '1 kyu',
  score: 0,
};

export const UserProfile = () => {
  return (
    <main className="play-view user-profile">
      <div className="user-profile__container">
        <UserInfo user={user} />
        <div className="user-profile__promo-block">
          <ReferalBlock />
          <Article />
        </div>
        <UserStats />
      </div>
    </main>
  );
};
