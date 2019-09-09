import React from "react";

const Card = ({ name, picture, url }) => {
  const imgSrc = `${picture.path}.${picture.extension}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="tc bg-red dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="characters" src={imgSrc} width={200} height={200} />
        <div>
          <h2>{name}</h2>
        </div>
      </div>
    </a>
  );
};

export default Card;
