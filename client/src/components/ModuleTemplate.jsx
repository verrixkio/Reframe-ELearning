import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';
import WorkMats from './WorkMats'

class ModuleTemplate extends React.Component {

  constructor(props){
    super(props);
    this.state = { readings: '', activities: ''};
  }
  componentDidMount() {

    axios.get('/api/reading?id=' + this.props.url_id)
      .then(res => {
        this.setState({ readings: res.data});
      })

    axios.get('/api/activity?id=' + this.props.url_id)
    .then(res => {
      this.setState({ activities: res.data});
    })
  }

  render() {

    const readingData = Object.entries(this.state.readings).map(([key, index]) => {
      return (
        <h4 key={index}>{index.title}</h4>
      )
    })

    const activityData = Object.entries(this.state.activities).map(([key, index]) => {
      return (
        <h4 key={index}>{index.intro_title}</h4>
      )
    })

      return (
        <div>
          <NavBar/>

          <div className="main-content">
            <div className="row">
              <div className="side-nav col-3 no-gutters">
                <h3>Reading:</h3>
                {readingData}
                <h3>Activities:</h3>
                {activityData}
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