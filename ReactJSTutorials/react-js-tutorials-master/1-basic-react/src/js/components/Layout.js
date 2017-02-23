import React from "react";

// You want to keep these alphabetical
import Footer from "./Footer";
import Header from "./Header";

// Core of React is that everything is a Componenet!
// Like in HTML, everything is a <tag> element

export default class Layout extends React.Component {
  // Must call super() as first line of react component constructor
  constructor() {
    super();
    // 'state' is special variable in React
    // set your initial state
    // Usually, 'state' only get used if component has an internal value that only effects that component and doesn't affect rest of the app
    // Otherwise you would use 'props', which are injected into every other component
    this.state = {
      title: "Welcome",
    };
  }

  // Class method to change title, parameter taking in new title
  changeTitle(title) {
    // this.setState is one method you need to know for state
    // you change state by passing in a new {title: "Whatever"} object
    // In es6, passing in { title } is the same as saying {title: title}
    this.setState({ title });
  }

  // Everthing needs render() method
  // It says what we a spitting out
  render() {
    // in JSX, anything wrapped in () can convert HTML to javascript created elements (eg: document.createElement("div"))
    // Access this.state.name
    // What's cool about 'state' is that whenever it changes on a component, the component will automatically re-render and update the DOM
    // If there are no changes, the DOM won't get touched
    // One of big amazing things about React is that it manages a virtual DOM for you
    // When React renders out the component tree (see below), it looks for changes between the virtual DOM / actual DOM
    // If there are changes, it will update only the effected nodes in the most efficient way
    // If no changes, it doesn't touch webpage
    // This is great because DOM updating usually slowest part! s

    // What looks like HTML attributes here are known as 'props' in React
    // This is how you pass values to other React components
    // this.state.title value will be available to Header as this.props.title
    // Can also pass in function like changeTitle, BUT very important you use this.changeTitle.bind(this)
    // If you don't bind the function to 'this' (ie: Layout Component), then it will try to change the 'state' in the component it was called in (it will try to execute in the context of whoever is called it)
    // We don't use state in Header so this would do nothing!
    // We want change in input field (inside Header) to update the state in Layout, so that's why we use bind(this) on the props method
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
