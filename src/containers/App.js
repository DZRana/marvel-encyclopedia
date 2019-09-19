/* TODO:
1. API call loading screen.
2. Handle empty string search query.
3. Hide the API keys.
*/

import React, { Component } from "react";
import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import FilterBox from "../components/FilterBox";
import "tachyons";

const limit = 100;
const ts = 1;
const privateKey = "b05f170acb57641060db8f283c2d5394d6629f8d";
const publicKey = "aeffa8b2b5b151f4e5dbc712f57cfa64";
var md5 = require("md5");
const hash = md5(ts + privateKey + publicKey);
const request = `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      filterStr: ""
    };
  }

  async componentDidMount() {
    const response = await fetch(request);
    const json = await response.json();
    this.setState({ characters: json.data.results });
  }

  async callAPI(event) {
    const response = await fetch(
      `${request}&nameStartsWith=${event.target.value}`
    );
    const json = await response.json();
    this.setState({ characters: json.data.results });
  }

  onSearchChange = event => {
    if (event.keyCode === 13) {
      this.callAPI(event);
    }
  };

  onFilterChange = event => {
    this.setState({ filterStr: event.target.value });
  };

  render() {
    const { characters, filterStr } = this.state;
    const filteredChars = characters.filter(character => {
      return character.name.toLowerCase().includes(filterStr.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">Marvel Encyclopedia</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <FilterBox filterChange={this.onFilterChange} />
        <Scroll>
          {!characters.length && <h2>No Results</h2>}
          <CardList characters={filteredChars} />
        </Scroll>
      </div>
    );
  }
}

export default App;
