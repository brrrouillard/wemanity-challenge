import React, { Component } from "react";
import "./_SearchContainer.css";
import axios from "axios";

import SearchField from "./SearchField";
import ContactInfo from "./ContactInfo";

const apiURL = "http://localhost:8080/contacts/";

export class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      contactsList: []
    };
  }

  fetchContacts = data => {
    console.log(data);
    fetch(apiURL + data)
      .then(res => {
        console.log(res);
  })};

  render() {
    return (
      <div id="SearchContainer">
        <SearchField fetchContacts={this.fetchContacts} />
        {this.state.contactsList.map(contact => (
          <ContactInfo />
        ))}
      </div>
    );
  }
}

export default SearchContainer;
