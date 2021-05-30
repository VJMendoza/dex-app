import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: "",
    };
  }

  handleChange(event) {
    this.setState({ inputName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.inputName);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>Search: </label>
        <input type="text" value={this.state.inputName} onChange={(e) => this.handleChange(e)} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;
