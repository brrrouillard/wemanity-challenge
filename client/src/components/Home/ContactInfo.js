import React, { Component } from "react";
import "./_ContactInfo.css";

export class ContactInfo extends Component {
  navigateToEdit = () => {
    this.props.history.push({
      pathname: '/edit',
      state: {contact: this.props.contact}
    })
  }
  render() {
    return <div id="ContactInfo">
      <div id="name">{this.props.contact.firstName} {this.props.contact.lastName}</div>
      <div id="number">{this.props.contact.number}</div>
      <button id="editButton" onClick={this.navigateToEdit}>Edit</button>
    </div>;
  }
}

export default ContactInfo;
