import React from "react";
import ReactDOM from "react-dom";
import { Pokedex } from "pokeapi-js-wrapper";

class Dex extends React.Component {
  constructor() {
    super();

    this.state = {
      test: "",
      dex: new Pokedex(),
    };
  }

  componentDidMount() {
    this.state.dex.getPokemonByName("whimsicott").then((response) => {
      this.setState({ test: response }); 
    });
  }

  render() {
    const P = new Pokedex();

    return (JSON.stringify(this.state.test));
  }
}

export default Dex;
