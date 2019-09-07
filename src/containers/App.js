import React, { Component } from "react";
import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";

const ts = 1;
const privateKey = "b05f170acb57641060db8f283c2d5394d6629f8d";
const publicKey = "aeffa8b2b5b151f4e5dbc712f57cfa64";
var md5 = require("md5");
const hash = md5(ts + privateKey + publicKey);

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    )
      .then(response => response.json())
      .then(chars => this.setState({ characters: chars.data.results }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { characters, searchfield } = this.state;
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    console.log(filteredCharacters);
    return !characters.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Marvel Encyclopedia</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList characters={filteredCharacters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
