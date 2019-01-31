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

  componentDidMount() {
    // Load before first search
    this.fetchContacts("");
  }
  navigateToAdd = () => {
    this.props.history.push("/add");
  };

  render() {
    return (
      <div id="SearchContainer">
        <SearchField fetchContacts={this.fetchContacts} />
        {this.state.contactsList.map(contact => (
          <ContactInfo
            contact={contact}
            key={contact._id}
            history={this.props.history}
          />
        ))}
        <button onClick={this.navigateToAdd}>New Contact</button>
      </div>
    );
  }
}

export default SearchContainer;
