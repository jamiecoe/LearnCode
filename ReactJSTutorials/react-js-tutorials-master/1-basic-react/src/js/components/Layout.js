import React from "react";

import Footer from "./Footer";
import Header from "./Header";

// Core of React is that everything is a Componenet!
// Like in HTML, everything is a <tag> element

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  // Everthing needs render() method
  // It says what we a spitting out
  render() {
    // in JSX, anything wrapped in () can convert HTML to javascript created elements (eg: document.createElement("div"))
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
