import React from 'react';
import logo from '../media/logos/transparent-logo.png';

class NavBar extends React.Component {

  constructor(props){
      super(props);
      this.state = { email: '', password: '', message: 'Click the button to load data!'};
  }

  render () {
    return (
      <div className="overall-navbar">
        <nav className="mobile" role="navigation">
          <div className="nav-container">
            <div className="logo">
              <img src={require("../media/logos/transparent-logo.png")} alt="website logo"></img>
            </div>
            <div id="menuToggle">
            {/* <!--
            A fake / hidden checkbox is used as click reciever,
            so you can use the :checked selector on it.
            --> */}
            <input type="checkbox" />
          
            {/* <!--
            Some spans to act as a hamburger.
            
            They are acting like a real hamburger,
            not that McDonalds stuff.
            --> */}
            <span></span>
            <span></span>
            <span></span>
          
            {/* <!--
            Too bad the menu has to be inside of the button
            but hey, it's pure CSS magic.
            --> */}
            <ul id="menu">
              <li><a href="#home-toggle">Plan</a></li>
              <li><a href="#what-we-do-toggle2">Team</a></li>
              <li><a href="#about-toggle">Log Out</a></li>
              <li><a href="#contact-toggle">Profile</a></li>
            </ul>
            </div>
          </div>
        </nav>
        <header className="desktop">
          <div className="logo">
            <img src={require("../media/logos/transparent-logo.png")} alt="website logo"/>
          </div>
          <div className="options desktop">
          <ul>
          <li>
              <a href="#home-toggle">Plan</a></li>
              <li><a href="#what-we-do-toggle2">Team</a></li>
              <li><a href="#about-toggle">Log Out</a></li>
              <li><a href="#contact-toggle">Profile</a></li>
          </ul>
          </div>
        </header>
      </div>
    );
  }  
}

export default NavBar;