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

    axios.get('/api/reading?id=' + this.props.course_id)
      .then(res => {
        console.log(typeof(res.data), 'here is our response data')
        this.setState({ readings: res.data});
        console.log(this.state.readings)
      })
    }
  render () {
    const readingData = Object.entries(this.state.readings).map(([key, index]) => {
      return (
        <h3 key={index}>{index.title}</h3>
      )
    })
    return (
        <div>
          <h3>Work</h3>
          {readingData}
          
        </div>
    );
  }
}

export default SideNav;