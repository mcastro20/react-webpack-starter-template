import React, { Component } from "react";
// components
import Sidebar from "../../components/Sidebar/Sidebar";

export class Dashboard extends Component {
  render() {
    return (
      <div className="main">
        <Sidebar />
      </div>
    );
  }
}

export default Dashboard;
