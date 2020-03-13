import React from 'react';
import axios from 'axios';
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
    this.state = { readings: '', activities: ''};
  }
  componentDidMount() {
    // Get appropriate values through multiple axios requests.

    // Our path needs to take a param.

    // We need all readings that match the module ID of 1.
    // We need all activities that match the module ID of 1.

    axios.get('/api/course')
      .then(res => {
        this.setState({ course: res.data[0]});
        console.log(this.state.course)
      })
    }
  render () {
    return (
        <div>
          <h3>Work</h3>
          <h3>{this.props.course_id}</h3>
        </div>
    );
  }
}

export default SideNav;