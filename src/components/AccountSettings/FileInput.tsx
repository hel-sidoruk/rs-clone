import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Avatar } from '../UI/Avatar';

export const FileInput = ({ setImage }: { setImage: (f: File) => void }) => {
  const { avatar } = useTypedSelector((state) => state.account);

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImage(e.target.files[0]);
  };

  return (
    <div className="field">
      <label className="label" htmlFor="avatar">
        Avatar
      </label>
      <div className="file-upload">
        <Avatar src={avatar || ''} size="65px" />
        <input type="file" className="input" onChange={selectFile} id="avatar" accept="image/*" />
      </div>
    </div>
  );
};
