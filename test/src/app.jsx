import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

import Home from 'page/home/index.jsx';

export default class App extends Component {
  render() {
    return (
      <div>nidema</div>

    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
);
