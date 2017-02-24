import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// Top level features (eg: Archives/Featured/Layout/Settings) are stored in /pages folder
import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');


ReactDOM.render(
  // Main thing we render in <Router> component
  // Inside that are all the different <Route> components
  // path="/" is the default path
  // Inside this <Route>, you can add some sub-routes
  // Layout is going to be whatever is on your entire page (eg: NavBar, Header, Footer)
  // All other child routes will get loaded depending which page/state you're on



  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      {/* - archives(/:article) means you're adding a Param to url
          - putting () around /:article means its optional, you don't have to add specific article to url 
      */}
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
