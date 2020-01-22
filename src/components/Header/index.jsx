import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <h1>Lima Frontend</h1>
        <p>Taller de React JS</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/blog" replace>Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
