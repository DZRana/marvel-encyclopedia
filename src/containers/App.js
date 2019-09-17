import React, { Component } from "react";
import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import "tachyons";

const ts = 1;
const privateKey = "b05f170acb57641060db8f283c2d5394d6629f8d";
const publicKey = "aeffa8b2b5b151f4e5dbc712f57cfa64";
var md5 = require("md5");
const hash = md5(ts + privateKey + publicKey);
const request = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  async componentDidMount() {
    const response = await fetch(request);
    const json = await response.json();
    this.setState({ characters: json.data.results });
  }

  // TODO: this doesn't work right because onSearchChange is called for every single key pressed and keeps calling the api. i need to separate the two behaviors. one for a search, one for a filter (there's still an issue with 20 char limit... maybe infinite scroll load more?!);
  async callAPI(event) {
    const response = await fetch(
      `${request}&nameStartsWith=${event.target.value}`
    );
    const json = await response.json();
    this.setState({ characters: json.data.results });
  }

  // Every time you make your own methods on a component use the following syntax (arrow function):
  onSearchChange = event => {
    if (event.target.value !== "") {
      this.callAPI(event);
    }
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="tc">
        <h1 className="f1">Marvel Encyclopedia</h1>
        {/*USE this. below ("this" keyword) as we are in an object (class App is an OBJECT!*/}
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          {/*See "Use && for a More Concise Conditional" from FCC about the &&*/}
          {!characters.length && <h2>No Results</h2>}
          <CardList characters={characters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
