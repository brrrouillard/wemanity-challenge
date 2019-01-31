import React, { Component } from "react";
import "./_ContactInfo.css";

export class ContactInfo extends Component {
  render() {
    return <div id="ContactInfo">
      <div id="name">Matthieu Brouillard</div>
      <div id="number">0470 69 91 40</div>
      <button id="editButton">Edit</button>
    </div>;
  }
}

export default ContactInfo;
