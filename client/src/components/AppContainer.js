import React, { Component } from 'react'
import "./_AppContainer.css";

import Header from "./Header";
import SearchContainer from "./Home/SearchContainer";

export class AppContainer extends Component {
  render() {
    return (
      <div id="AppContainer">
      <Header />
      <SearchContainer />
      </div>
    )
  }
}

export default AppContainer
