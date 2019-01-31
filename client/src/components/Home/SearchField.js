import React, { Component } from "react";
import "./_SearchField.css";

export class SearchField extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleInputChange = event => {
    if (event.target.value.length > 1) {
      console.log(event.target.value);
      this.props.fetchContacts(event.target.value);
    }
    // this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div id="SearchField">
        <input
          placeholder="Search..."
          id="search-input"
          // value={this.state.input}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default SearchField;
