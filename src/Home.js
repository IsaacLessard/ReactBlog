import React, { Component } from 'react';

import NavBar from './NavBar';
import Content from './Content'

class Home extends Component {

  render() {
    var mainStyle = {
      fontFamily: "'Sunflower', sans-serif"
    }

    return (
      <div style={mainStyle}>
        <NavBar/>
        <Content/>
      </div>
    )
  }
}

export default Home;
