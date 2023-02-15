import React, { useEffect, useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Avatar } from '../UI/Avatar';

export const InformationForm = () => {
  const { avatar, username } = useTypedSelector((state) => state.account);
  const [usernameValue, setUsernameValue] = useState('');

  useEffect(() => {
    if (username) setUsernameValue(username);
  }, [username]);
  return (
    <form>
      <h3 className="title">INFORMATION</h3>
      <div className="form__content">
        <div className="field">
          <label className="label" htmlFor="avatar">
            Avatar
          </label>
          <div className="file-upload">
            <Avatar src={avatar || ''} size="60px" />
            <input type="file" className="input" id="avatar" />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            className="input"
            value={usernameValue}
            onChange={(e) => setUsernameValue(e.target.value)}
            id="username"
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input className="input" id="name" />
        </div>
        <div className="field">
          <label className="label" htmlFor="clan">
            Clan
          </label>
          <input className="input" id="clan" />
        </div>
      </div>
      <button className="btn" type="submit">
        Update
      </button>
    </form>
  );
};
