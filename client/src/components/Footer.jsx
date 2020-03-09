import React from 'react';


class Footer extends React.Component {

  constructor(props){
    super(props);
    this.state = { email: '', password: '', message: 'Click the button to load data!'};
  }

  render () {
    return (
      <footer>
        <div class="footer-content">
          <span>Copyright © 2020 Reframe Leadership Inc</span>
          <div class="center">
            <img src={require("../media/logos/transparent-logo-white.png")}alt="website logo"/>
          </div>
        </div>
    </footer>
    );
  }
}

export default Footer;