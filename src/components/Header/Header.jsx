import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="btn btn-info">
              <i className="fas fa-align-left" />
              <span>Toggle Sidebar</span>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
