import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import FilterBox from "../components/FilterBox";
import "tachyons";
import marvel from "../apis/marvel";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterStr, setFilterStr] = useState("");
  const [loadingFlag, setLoadingFlag] = useState(false);

  const initialSearch = async () => {
    const response = await marvel.get("/characters");
    setCharacters(response.data.data.results);
  };

  const onSearchSubmit = async (character) => {
    setLoadingFlag(true);
    const response = await marvel.get("/characters", {
      params: { nameStartsWith: character },
    });
    setCharacters(response.data.data.results);
    setLoadingFlag(false);
  };

  const onFilterChange = (event) => {
    setFilterStr(event.target.value);
  };

  const filteredChars = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterStr.toLowerCase());
  });

  useEffect(() => {
    initialSearch();
  }, []);

  return (
    <div className="tc">
      <h1 className="f1">Marvel Encyclopedia</h1>
      <SearchBox onSearchSubmit={onSearchSubmit} />
      <FilterBox onFilterChange={onFilterChange} />
      <Scroll>
        {!characters.length && !loadingFlag && <h2>No Results</h2>}
        {loadingFlag && <h2>Loading</h2>}
        {!loadingFlag && <CardList characters={filteredChars} />}
      </Scroll>
    </div>
  );
};

export default App;
