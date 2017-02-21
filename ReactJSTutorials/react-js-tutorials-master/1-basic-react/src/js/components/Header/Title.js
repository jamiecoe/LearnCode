import React from "react";


export default class Title extends React.Component {
  // Extended logic can be done here
  render() {
    // Basic logic can be done here
    return (
      // Components return exactly 1 DOM element
      // Just like HTML everything has to have 1 parent DOM element, can't have 2
      // If you wanted to return 2 <h1> elements, you'd need to wrap them in <div> so you are only returning one thing
      // Inside JSX portion (ie: inside return()), anything in {} will just execute as normal javascript
      <h1>{this.props.title}</h1>
    );
  }
}
