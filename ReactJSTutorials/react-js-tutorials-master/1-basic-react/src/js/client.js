import React from "react";
// ReactDom is rendering engine, separate from React syntax, very versitile because you can render to lots of different things (html, dom, native apps)
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
