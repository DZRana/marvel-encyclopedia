import React from "react";

const FilterBox = ({ filterChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="filter results"
        onChange={filterChange}
      />
    </div>
  );
};

export default FilterBox;
