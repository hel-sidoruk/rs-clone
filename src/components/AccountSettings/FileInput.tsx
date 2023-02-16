import React, { useRef, useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Avatar } from '../UI/Avatar';

export const FileInput = ({ setImage }: { setImage: (f: File | null) => void }) => {
  const { avatar } = useTypedSelector((state) => state.account);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<{
    src: string | ArrayBuffer;
    name: string;
  } | null>(null);

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImage(e.target.files[0]);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!uploadedImage) setDragActive(true);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (uploadedImage) return;
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result)
          setUploadedImage({ src: e.target.result, name: file.name });
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!uploadedImage) return;
    e.stopPropagation();
    setUploadedImage(null);
    setImage(null);
  };

  return (
    <div className="field">
      <label className="label" htmlFor="avatar">
        Avatar
      </label>
      <div className="file-upload">
        <Avatar src={avatar || ''} size="65px" />
        <input
          ref={inputRef}
          type="file"
          className="input"
          onChange={selectFile}
          id="avatar"
          accept="image/*"
        />
        <div
          className={`file-upload__field ${dragActive ? 'active' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={() => setDragActive(false)}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          {!uploadedImage && 'Drag your file here or'}
          <div className="btn" onClick={resetImage}>
            {uploadedImage ? 'Reset' : 'Upload file'}
          </div>
          {uploadedImage && (
            <>
              <img className="file-upload__image" src={uploadedImage.src as string} />
              <span>{uploadedImage.name}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
