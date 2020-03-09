import React from 'react';
import NavBar from './NavBar';


class Home extends React.Component {

  constructor(props){
      super(props);
      this.state = { email: '', password: '', message: 'Click the button to load data!'};
  }

  render() {
      return (
        <NavBar/>
    );
  }
}

export default Home;