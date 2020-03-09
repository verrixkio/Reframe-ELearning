import React from 'react';
import NavBar from './NavBar';


class CourseHome extends React.Component {

  constructor(props){
      super(props);
      this.state = { email: '', password: '', message: 'Click the button to load data!'};
  }

  render() {
      return (
        <div>
          <NavBar/>
          <div className="main-content">
            <div className="row">
              <div className="col-6">
                <h1>Hello</h1>
              </div>
              <div className="col-6">
                <h1>Hello</h1>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default CourseHome;