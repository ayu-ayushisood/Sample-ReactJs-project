import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="header-bg">
          	<nav className="navbar sticky-top">
				<div className="container">
				   <Link className="navbar-brand h-link" to="/">Home</Link>
				   <Link className="navbar-brand h-link" to="/ourTeam">Our Team</Link>
				</div>
			</nav>
          
        </header>
        
      </div>
    );
  }
}

export default Header;
