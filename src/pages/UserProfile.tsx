import React, { useEffect } from 'react';
import Article from '../components/Article';
import ReferalBlock from '../components/UserProfile/ReferalBlock';
import UserInfo from '../components/UserProfile/UserInfo';
import UserStats from '../components/UserProfile/UserStats';
import { useNavigate, useParams } from 'react-router-dom';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

export const UserProfile = () => {
  const { id } = useParams();
  const { setCurrentUser } = useActions();
  const { currentUser } = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (id) setCurrentUser(id);
  }, [id]);

  return (
    <main className="play-view user-profile">
      <div className="user-profile__container">
        {currentUser && <UserInfo />}
        <div className="user-profile__promo-block">
          <ReferalBlock />
          <Article />
        </div>
        {currentUser && <UserStats />}
      </div>
    </main>
  );
};
