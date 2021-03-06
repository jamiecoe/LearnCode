import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    // Make an object for doing your inline styles
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>

        <Nav location={location} />
        {/* - use inline styles by setting style= yourStyleObject*/}
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
              {/* - this.props.children is whichever child <Route> you are on (eg: Featured / Archives / Settings)
                  - When you click a link to a different Route, this.props.children is changed and the page content is re-rendered
                */}
              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
