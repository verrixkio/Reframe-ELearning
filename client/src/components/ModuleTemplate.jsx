import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import SideNav from './SideNav'
import WorkMats from './WorkMats'

class ModuleTemplate extends React.Component {

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
              <div className="side-nav col-3 no-gutters">
                <SideNav/>
              </div>
              <div className="workbar col-9 no-gutters">
            {/* 
                WorkMats takes in two params
                      
                      type of work material (Activity, Reading, or Introduction)
                      Module_Id

                It checks what type of work activity and then renders the appropriate view. Seperated into 3 different components.

                    M_Introduction.jsx
                    M_Activity.jsx
                    M_Reading.jsx
                  
              */}
              <WorkMats/>
              </div>
          </div>
          {/* Closing Main Content Div (everything but nav)*/}
            <Footer/>
          </div>
        {/* Closing Overall Render Div */}
        </div>
    );
  }
}

export default ModuleTemplate;