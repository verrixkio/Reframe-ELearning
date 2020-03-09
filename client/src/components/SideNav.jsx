import React from 'react';


class SideNav extends React.Component {

  constructor(props){
    super(props);
    this.state = { email: '', password: '', message: 'Click the button to load data!'};
  }

  render () {
    return (
        <div>
          <h3>Work</h3>
        </div>
    );
  }
}

export default SideNav;