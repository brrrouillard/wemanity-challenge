import React, { Component } from "react";
import axios from "axios";

import "./_AddContactContainer.css";

const apiURL = "https://wemanity-kata.herokuapp.com/contacts/";

export class AddContactContainer extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      firstName: "",
      lastName: "",
      number: ""
    };
  }

  handleFirstName = event => {
    this.setState({ firstName: event.target.value });
  };

  handleLastName = event => {
    this.setState({ lastName: event.target.value });
  };

  handleNumber = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = () => {
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.number === ""
    )
      this.setState({ message: "Please enter all fields" });
    else if (!this.state.number.match(/^[+][0-9][0-9][ ][0-9][0-9][ ][0-9]*/))
      this.setState({ message: "Please enter a valid phone number" });
    else {
      axios
        .post(apiURL, {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          number: this.state.number
        })
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .then(() => this.setState({message: "Done!"}));
    }
  };

  navigateToHome = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div id="AddContactContainer">
        <h1 id="title">New Contact</h1>
        <h5>{this.state.message}</h5>
        <input
          placeholder="First Name"
          onChange={this.handleFirstName}
          value={this.state.firstName}
        />
        <input
          placeholder="Last Name"
          onChange={this.handleLastName}
          value={this.state.LastName}
        />
        <input
          placeholder="Number"
          onChange={this.handleNumber}
          value={this.state.number}
        />
        <button onClick={this.handleSubmit}>Save</button>
        <button onClick={this.navigateToHome}>Back</button>
      </div>
    );
  }
}

export default AddContactContainer;
