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
import Login from 'page/login/index.jsx';
import ErrorPage from 'page/error/index.jsx';
import UserList from 'page/user/index.jsx';

export default class App extends Component {
  render() {
    let LayoutRouter = 
      <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product" component={Home} />
            <Route path="/product-category" component={Home} />
            <Route path="/user/index" component={UserList}/>
            <Redirect exact from="/user" to="/user/index" />
             {/*<Route path="/order/index" component={OrderList} />
            <Route path="/order/detail/:orderNumber" component={OrderDetail} />
            <Route path="/user/index" component={UserList} />
            <Redirect exact from="/order" to="/order/index" />
            <Redirect exact from="/user" to="/user/index" />
            */}
            <Route component={ErrorPage} />
          </Switch>
      </Layout>;
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={props => LayoutRouter} />
        </Switch>
      </Router>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
);
