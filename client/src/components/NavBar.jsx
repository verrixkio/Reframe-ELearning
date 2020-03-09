import React from 'react';
import logo from '../media/logos/transparent-logo.png';

class NavBar extends React.Component {

  constructor(props){
      super(props);
      this.state = { email: '', password: '', message: 'Click the button to load data!'};
  }

  render () {
    return (
      <div class="overall-navbar">
        <nav class="mobile" role="navigation">
          <div class="nav-container">
            <div class="logo">
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
              <li><a href="#home-toggle">Home</a></li>
              <li><a href="#what-we-do-toggle2">What We Do</a></li>
              <li><a href="#about-toggle">About Us</a></li>
              <li><a href="#testimonials-toggle">Testimonials</a></li>
              {/* <!-- <li><a href="#client-site-toggle">Active Client Site</a></li> --> */}
              <li><a href="#contact-toggle">Contact Us</a></li>
            </ul>
            </div>
          </div>
        </nav>
        <header class="desktop">
          <div class="logo">
            <img src={require("../media/logos/transparent-logo.png")} alt="website logo"/>
          </div>
          <div class="options desktop">
          <ul>
            <li><a href="#home-toggle">Home</a></li>
            <li><a href="#what-we-do-toggle2">What We Do</a></li>
            <li><a href="#about-toggle">About Us</a></li>
            <li><a href="#testimonials-toggle">Testimonials</a></li>
            {/* <li><a href="#client-site-toggle">Active Client Site</a></li> */}
            <li><a href="#contact-toggle">Contact Us</a></li>
          </ul>
          </div>
        </header>
      </div>
    );
  }  
}

export default NavBar;