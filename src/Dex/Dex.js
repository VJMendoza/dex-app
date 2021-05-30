import React from "react";

import { Pokedex } from "pokeapi-js-wrapper";

import Search from "./Search.js";

class Dex extends React.Component {
  constructor() {
    super();

    this.state = {
      dex: new Pokedex({cacheImages: true}),
      searchInput: "",
      searchResult: {},
    };
  }

  handleSearchSubmit(value) {
    this.setState({
      searchInput: value,
    });

    this.searchDex(value);
  }

  async searchDex(name) {
    const dexResponse = await this.state.dex.getPokemonByName(name);
    this.setState({
      searchResult: dexResponse,
    });
  }

  render() {
    let showResult;
    if (Object.entries(this.state.searchResult).length === 0 && this.state.searchResult.constructor === Object) {
      showResult = <h4>No search</h4>;
    } else {
      showResult = (
        <img
          src={this.state.searchResult.sprites.front_default}
          alt={this.state.searchInput}
        />
      );
    }

    return (
      <div>
        <Search onSubmit={(value) => this.handleSearchSubmit(value)} />
        {showResult}
      </div>
    );
  }
}

export default Dex;
