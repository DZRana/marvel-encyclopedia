import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        required
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="starts with..."
        onKeyDown={searchChange}
      />
    </div>
  );
};

export default SearchBox;
