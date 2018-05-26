import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    var navbar = {
      position: "fixed",
      top: 0,
      width: "200px",
      height: "100vh",
      backgroundColor: "black",
      color: "white"
    }

    return (
      <div style={navbar}>
        <i className="medium material-icons">ac_unit</i>

        <div className="navbar-options">
          <i className="medium material-icons">add_circle_outline</i>
        </div>
      </div>
    )
  }
}

export default NavBar
