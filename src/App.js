import React, { Component } from "react";
import Routes from "./Routes";
import { Link, withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: true,
      isAuthenticating: true
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
