import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import ReferalBlock from '../components/UserProfile/ReferalBlock';
import UserInfo from '../components/UserProfile/UserInfo';
import { UserInterface } from '../types/user';
import UserStats from '../components/UserProfile/UserStats';
import { useNavigate, useParams } from 'react-router-dom';
import { UsersAPI } from '../api';

export const UserProfile = () => {
  const [user, setUser] = useState<UserInterface | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    UsersAPI.getOne(id as string).then((data) => {
      setUser(data);
      navigate(`/users/${id}/stats`);
    });
  }, [id]);

  return (
    <main className="play-view user-profile">
      <div className="user-profile__container">
        {user && <UserInfo user={user} />}
        <div className="user-profile__promo-block">
          <ReferalBlock />
          <Article />
        </div>
        {user && <UserStats user={user} />}
      </div>
    </main>
  );
};
