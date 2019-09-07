import React from "react";
import Card from "./Card";

const CardList = ({ characters }) => {
  return (
    <div>
      {characters.map((user, i) => {
        return (
          <Card
            key={characters[i].id}
            name={characters[i].name}
            picture={characters[i].thumbnail}
          />
        );
      })}
    </div>
  );
};

export default CardList;
