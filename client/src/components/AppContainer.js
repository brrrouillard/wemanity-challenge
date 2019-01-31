import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./_AppContainer.css";

import Header from "./Header";
import SearchContainer from "./Home/SearchContainer";
import AddContactContainer from "./AddContact/AddContactContainer";
import EditContactContainer from "./EditContact/EditContactContainer";

export class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="AppContainer">
          <Header />
          <Route exact path="/" component={SearchContainer} />
          <Route exact path="/add" component={AddContactContainer} />
          <Route exact path="/edit" component={EditContactContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
