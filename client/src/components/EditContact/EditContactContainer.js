import React, { Component } from "react";
import "./_EditContactContainer.css";
import axios from "axios";

const apiURL = "https://wemanity-kata.herokuapp.com/contacts/";

export class EditContactContainer extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
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
        .put(apiURL + this.state.id, {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          number: this.state.number
        })
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .then(() => this.setState({ message: "Done!" }));
    }
  };

  navigateToHome = () => {
    this.props.history.push('/')
  }

  componentWillMount() {
    this.setState({
      id: this.props.location.state.contact._id,
      firstName: this.props.location.state.contact.firstName,
      lastName: this.props.location.state.contact.lastName,
      number: this.props.location.state.contact.number
    });
  }

  render() {
    return (
      <div id="EditContactContainer">
        <h1 id="title">
          Edit {this.state.firstName} {this.state.lastName}
        </h1>
        <h5>{this.state.message}</h5>
        <input
          placeholder="First Name"
          onChange={this.handleFirstName}
          value={this.state.firstName}
        />
        <input
          placeholder="Last Name"
          onChange={this.handleLastName}
          value={this.state.lastName}
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

export default EditContactContainer;
