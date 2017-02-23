import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  // Class method
  // Receives 'e' which is a javascript event just like a normal event in jQuery
  handleChange(e) {
    // e.target is element thats receving the onChange (ie: the input box)
    // .value() is value inside input box
    // put this into title variable and pass it into changeTitle function in Layout component (don't forget this.props.changeTitle is bound to Layout)
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      // need 'this' to access class methods (eg: this.handleChange)
      // passing though this.props.title to Title component

      // input box starts with this.props.title value
      // Any time someone types in it, the onChange event is triggered
      // again .bind(this) so its bound to the right context

      // If we didn't have change event, input value would keep updating with default value this.props.title
    
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
