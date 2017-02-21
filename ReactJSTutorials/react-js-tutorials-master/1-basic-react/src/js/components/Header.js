import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  // Class method
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      // need 'this' to access class methods (eg: this.handleChange)
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
