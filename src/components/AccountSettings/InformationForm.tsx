import React, { useEffect, useState } from 'react';
import { AccountAPI } from '../../api/AccountAPI';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Avatar } from '../UI/Avatar';

export const InformationForm = () => {
  const { avatar, username, name, clan } = useTypedSelector((state) => state.account);
  const [usernameValue, setUsernameValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [clanValue, setClanValue] = useState('');
  const [success, setSuccess] = useState(false);
  const [avatarImage, setAvatarImage] = useState<File | null>(null);
  const { editAccountInfo } = useActions();

  useEffect(() => {
    if (username) setUsernameValue(username);
    if (name) setNameValue(name);
    if (clan) setClanValue(clan);
  }, [username, name, clan]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    const formData = new FormData();
    formData.append('newUsername', usernameValue);
    formData.append('name', nameValue);
    formData.append('clan', clanValue);
    if (avatarImage) formData.append('avatarImage', avatarImage);
    const { data } = await AccountAPI.editInfo(formData);
    if (data) {
      editAccountInfo(data);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }
  };
  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setAvatarImage(e.target.files[0]);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className={`form__success ${success ? '' : 'hidden'}`}>
        <i className="icon-moon icon-moon-user"></i>
        Info updated successfully
      </div>
      <h3 className="title">INFORMATION</h3>
      <div className="form__content">
        <div className="field">
          <label className="label" htmlFor="avatar">
            Avatar
          </label>
          <div className="file-upload">
            <Avatar src={avatar || ''} size="65px" />
            <input
              type="file"
              className="input"
              onChange={selectFile}
              id="avatar"
              accept="image/*"
            />
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
          <input
            className="input"
            id="name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="clan">
            Clan
          </label>
          <input
            className="input"
            id="clan"
            value={clanValue}
            onChange={(e) => setClanValue(e.target.value)}
          />
        </div>
      </div>
      <button className="btn" type="submit">
        Update
      </button>
    </form>
  );
};
