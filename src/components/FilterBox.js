import React, { useState } from "react";

const FilterBox = ({ onFilterChange }) => {
  const [filterStr, setFilterStr] = useState("");

  const onFilterChangeInstance = (event) => {
    setFilterStr(event.target.value);
    onFilterChange(event);
  };

  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="filter results"
        value={filterStr}
        onChange={(event) => onFilterChangeInstance(event)}
      />
    </div>
  );
};

export default FilterBox;
