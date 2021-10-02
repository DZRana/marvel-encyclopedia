import React, { Component } from "react";
import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import FilterBox from "../components/FilterBox";
import "tachyons";
import md5 from "md5";

const limit = 100;
const ts = 1;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const hash = md5(ts + privateKey + publicKey);
const request = `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

// const App = () => {
// test 3
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      filterStr: "",
      loading: false,
    };
  }

  async componentDidMount() {
    const response = await fetch(request);
    const json = await response.json();
    this.setState({ characters: json.data.results });
  }

  async callAPI(event) {
    this.setState({ loading: true });
    const response = await fetch(
      `${request}&nameStartsWith=${event.target.value}`
    );
    const json = await response.json();
    this.setState({ characters: json.data.results, loading: false });
  }

  onSearchChange = (event) => {
    if (event.keyCode === 13 && event.target.value !== "") {
      this.callAPI(event);
    }
  };

  onFilterChange = (event) => {
    this.setState({ filterStr: event.target.value });
  };

  render() {
    const { characters, filterStr, loading } = this.state;
    const filteredChars = characters.filter((character) => {
      return character.name.toLowerCase().includes(filterStr.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">Marvel Encyclopedia</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <FilterBox filterChange={this.onFilterChange} />
        <Scroll>
          {!characters.length && !loading && <h2>No Results</h2>}
          {loading && <h2>Loading</h2>}
          {!loading && <CardList characters={filteredChars} />}
        </Scroll>
      </div>
    );
  }
}

export default App;
