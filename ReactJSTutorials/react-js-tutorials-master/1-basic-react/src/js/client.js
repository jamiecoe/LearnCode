import React from "react";
// ReactDom is rendering engine, separate from React syntax, very versitile because you can render to lots of different things (html, dom, native apps)
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app');
// To render a component (eg: Layout), you use it as if it is an HTML tag
// Also supply app, which is <div> where we put our React components inside
ReactDOM.render(<Layout/>, app);
