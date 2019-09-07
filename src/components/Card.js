import React from "react";
import "tachyons";

const Card = ({ name, picture }) => {
  const imgSrc = `${picture.path}.${picture.extension}`;
  return (
    <div className="tc bg-red dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="characters" src={imgSrc} width={200} height={200} />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
