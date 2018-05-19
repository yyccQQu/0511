import React, { Component } from "react";
import PageTitle from "component/page-title/index.jsx"

class Home extends Component {
  render() {
    return (
      <div>
        <PageTitle title="首页" />
        <div id="page-wrapper">
          <div className="row">
            <div className="col-md-12">body</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;