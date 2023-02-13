import React, { useEffect } from 'react';
import { HomeBlock } from '../components/Home/HomeBlock';
import { HomeCommunity } from '../components/Home/HomeCommunity';
import { HomeHero } from '../components/Home/HomeHero';
import { HomeSharpen } from '../components/Home/HomeSharpen';
import { TextBlock } from '../components/Home/TextBlock';
import useTypedSelector from '../hooks/useTypedSelector';
import { homeBlocksBottom, homeContentBottom, homeContentTop } from '../utils/homeContent';

export const Home = ({ title }: { title: string }) => {
  const { isAuthorized } = useTypedSelector((state) => state.authorizedUser);

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="home">
      <HomeHero />
      <div className="container">
        <HomeSharpen isAuthorized={isAuthorized} />
        <div className="home__cells">
          {homeContentTop.map(({ title, text, src, pos, icon }) => (
            <HomeBlock key={title} title={title} text={text} src={src} pos={pos} icon={icon} />
          ))}
        </div>
        <HomeCommunity />
        <div className="home__cells bottom">
          {homeContentBottom.map(({ title, text, src, pos, icon }) => (
            <HomeBlock key={title} title={title} text={text} src={src} pos={pos} icon={icon} />
          ))}
        </div>
        <div className="container-small">
          <h2 className="block-title">{'What can I use\nCodewars for?'}</h2>
          <p className="text block-text">From beginner to expert and beyond...</p>
        </div>
        <div className="home__blocks">
          {homeBlocksBottom.map(({ title, text, icon }) => (
            <TextBlock key={title} title={title} className="small" icon={icon}>
              <p className="text">{text}</p>
            </TextBlock>
          ))}
        </div>
      </div>
    </div>
  );
};
