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

import Layout from 'component/layout/index.jsx';
import Home from 'page/home/index.jsx';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      </Router>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
);
