import React from 'react';

/* Logic for SideNav Mapping out the WorkMaterial(WorkMats).

  When directed to a specific module. We are able to access the module ID.

  For each introduction, reading, and activity with a moduleID of 1 for example. Render out the name of each object.

  Connect an event listener to each object title that calls WorksMats with two Params - 
      
        type of work material (Activity, Reading, or Introduction)
        Module_Id
  
  
*/

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