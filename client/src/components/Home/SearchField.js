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
      console.log(event.target.value);
      this.props.fetchContacts(event.target.value);
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div id="SearchField">
        <input
          placeholder="Enter a name or number..."
          id="search-input"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default SearchField;
