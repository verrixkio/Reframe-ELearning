import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';

class ModuleTemplate extends React.Component {

  constructor(props){
    super(props);
    this.state = { readings: '', activities: '', workDisplay: {}};
  }

  handleClick = () => {
    // Update our state here...
  };


    // here you know which component is that, so you can call parent method
    //This is the onclick handler for when someone clicks on one of the work navbars. 

    // For the sidenav, itneeds to render out each item as a button

    //This button needs to call our onClick defined above

    //This onlick needs to update the state of workDisplay with the relevant information being clicked.
    
    
    // this.state.workDisplay.update(this.state.);

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
    // SideNav Maps
    const readingList = Object.entries(this.state.readings).map(([key, index]) => {
      return (
        <h4 key={index}>{index.title}</h4>
      )
    })

    const activityList = Object.entries(this.state.activities).map(([key, index]) => {
      return (
        <h4 key={index}>{index.intro_title}</h4>
      )
    })

    // Work Materials Map

    const readingData = Object.entries(this.state.readings).map(([key, index]) => {
      return (
        <div>
        <h4 key={index.title}>{index.title}</h4>
        <p key={index.time}>{index.time}</p>
        <h4 key={index.intro_title}>{index.intro_title}</h4>
        <h4 key={index.intro_desc}>{index.intro_desc}</h4>
        </div>
      )
    })

    // const activityData = Object.entries(this.state.activities).map(([key, index]) => {
    //   return (
    //     <h4 key={index}>{index.intro_title}</h4>
    //   )
    // })

      return (
        <div>
          <NavBar/>

          <div className="main-content">
            <div className="row">
              <div className="side-nav col-3 no-gutters">
                <h3>Reading:</h3>
                {readingList}
                <h3>Activities:</h3>
                {activityList}
              </div>
              <div className="workbar col-9 no-gutters">
                <h3>Work</h3>
                {readingData}
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

export default ModuleTemplate;