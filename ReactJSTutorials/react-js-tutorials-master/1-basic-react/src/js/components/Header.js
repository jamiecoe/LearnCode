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
      // passing though this.props.title to Title component

      // input box starts with this.props.title value
      // Any time someone types in it, the onChange event is triggered
      
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
