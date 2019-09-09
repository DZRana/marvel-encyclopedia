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
      characters: []
    };
  }

  componentDidMount() {
    fetch(
      // `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${this.state.searchfield}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
      `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    )
      .then(response => response.json())
      .then(chars => this.setState({ characters: chars.data.results }));
  }

  // Every time you make your own methods on a component use the following syntax (arrow function):
  onSearchChange = event => {
    if (event.target.value !== "") {
      fetch(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${event.target.value}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
      )
        .then(response => response.json())
        .then(chars => this.setState({ characters: chars.data.results }));
      console.log(this.state.characters);
    }
  };

  render() {
    const { characters } = this.state;

    return !characters.length ? (
      <div className="tc">
        <h1 className="f1">Marvel Encyclopedia</h1>
        {/*USE this. below ("this" keyword) as we are in an object (class App is an OBJECT!*/}
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <h2>No Results</h2>
        </Scroll>
      </div>
    ) : (
      <div className="tc">
        <h1 className="f1">Marvel Encyclopedia</h1>
        {/*USE this. below ("this" keyword) as we are in an object (class App is an OBJECT!*/}
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList characters={characters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
