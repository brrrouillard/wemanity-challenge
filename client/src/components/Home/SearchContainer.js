import React, { Component } from "react";
import "./_SearchContainer.css";
import axios from "axios";

import SearchField from "./SearchField";
import ContactInfo from "./ContactInfo";

const apiURL = "https://wemanity-kata.herokuapp.com/contacts/";

export class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      contactsList: []
    };
  }

  fetchContacts = data => {
    console.log(data);
    axios
      .get(apiURL + data)
      .then(res => {
        console.log(res.data);
        this.setState({ contactsList: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div id="SearchContainer">
        <SearchField fetchContacts={this.fetchContacts} />
        {this.state.contactsList.map(contact => (
          <ContactInfo contact={contact} key={contact._id}/>
        ))}
      </div>
    );
  }
}

export default SearchContainer;
