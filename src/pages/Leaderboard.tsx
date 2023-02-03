import React, { useEffect } from 'react';
import { Rank } from '../components/Kata/Rank';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

export const Leaderboard = () => {
  const { users, loading, error } = useTypedSelector((state) => state.leaders);
  const { fetchLeaders } = useActions();
  useEffect(() => {
    fetchLeaders();
  }, []);
  console.log(users);

  return (
    <main className="play-view">
      <h1 className="page-title">Leaderboards</h1>
      <div className="leader__container">
        <div className="leader__tab">Overall</div>
        <div className="leader__list leader-table">
          <div>
            {`A user's honor is determined by earning higher ranks (dan/kyu) as well as through other
            activities such as getting up votes on kata, solutions and comments that they create.
            Certain activities are worth more honor than others. For example publishing a kata is
            worth more than solving one.`}
          </div>
          <div className="leader-table__header">
            <div>Position</div>
            <div>User</div>
            <div>Clan</div>
            <div>Honor</div>
          </div>

          {users.slice(0, 30).map((user, index) => (
            <div className="leader-table__tr" key={user.id}>
              <div className="leader-table__td leader-table__td_position">#{index + 1}</div>
              <div className="leader-table__td">
                <Rank rank={user.rank}></Rank>
                {user.username}
              </div>
              <td className="leader-table__td">{user.clan}</td>
              <td className="leader-table__td">{user.honor}</td>
            </div>
          ))}
          {error}
        </div>
      </div>
    </main>
  );
};
