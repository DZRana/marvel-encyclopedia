import React, { useState } from "react";

const SearchBox = ({ onSearchSubmit }) => {
  const [character, setCharacter] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(character);
  };

  return (
    <div className="pa2">
      <form onSubmit={onFormSubmit}>
        <input
          required
          className="pa3 ba b--green bg-lightest-blue"
          type="text"
          placeholder="starts with..."
          value={character}
          onChange={(event) => setCharacter(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBox;
