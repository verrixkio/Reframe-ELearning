import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class ModuleIntro extends React.Component {

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
            {/* Logic for SideNav Mapping out the WorkMaterial(WorkMats).
              
                When directed to a specific module. We are able to access the module ID.

                For each introduction, reading, and activity with a moduleID of 1 for example. Render out the name of each object.

                Connect an event listener to each object title that calls WorksMats with two Params - 
                    
                      type of work material (Activity, Reading, or Introduction)
                      Module_Id
                
                
              */}
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

export default ModuleIntro;