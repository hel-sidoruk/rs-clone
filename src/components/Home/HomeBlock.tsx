import React from 'react';
import { TextBlock } from './TextBlock';

interface Props {
  icon: JSX.Element;
  title: string;
  text: string;
  src: string;
  pos: string;
}

export const HomeBlock = ({ icon, title, text, src, pos }: Props) => {
  return (
    <div className="cells__item">
      <TextBlock title={title} icon={icon}>
        <p className="text">{text}</p>
      </TextBlock>
      <div className={`noise-image ${pos}`}>
        <img src={src} alt="content image" />
      </div>
    </div>
  );
};
