import React from 'react';

interface AddData {
  href: string;
  img: string;
  title: string;
  description: string;
}
const Adds = ({ data }: { data: AddData }) => {
  return (
    <div className="adds">
      <a href={data.href} target="_blank" rel="noreferrer">
        <span className="image">
          <img src={data.img} alt="some-cw-image" />
        </span>
        <span className="info">
          <span className="title">{data.title}</span>
          <span>{data.description}</span>
        </span>
      </a>
    </div>
  );
};

export default Adds;
