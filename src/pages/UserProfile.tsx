import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import ReferalBlock from '../components/UserProfile/ReferalBlock';
import UserInfo from '../components/UserProfile/UserInfo';
import { UserInterface } from '../types/user';
import UserStats from '../components/UserProfile/UserStats';
import { useParams } from 'react-router-dom';
import { UsersAPI } from '../api';

export const initialUser: UserInterface = {
  username: '',
  clan: '',
  honor: 0,
  id: '',
  leaderboardPosition: 1,
  rank: '',
  name: '',
  score: 0,
  totalCompleted: 0,
};

export const UserProfile = () => {
  const [user, setUser] = useState(initialUser);
  const { id } = useParams();

  useEffect(() => {
    UsersAPI.getOne(id as string).then((data) => setUser(data));
  }, []);

  return (
    <main className="play-view user-profile">
      <div className="user-profile__container">
        <UserInfo user={user} />
        <div className="user-profile__promo-block">
          <ReferalBlock />
          <Article />
        </div>
        <UserStats user={user} />
      </div>
    </main>
  );
};
