import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';

class ModuleTemplate extends React.Component {

  constructor(props){
    super(props);
    this.state = { readings: '', activities: '', workDisplay: {}};
  }

  handleClick = (displayVal) => {
    // Update our state here...

    this.setState({ workDisplay: displayVal}, () => console.log(this.state.workDisplay, "this is our workdisplay"))

  };


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

        <button value={this.state.readings} onClick={() => {this.handleClick(index)}} key={index}>{index.title}</button>
        
      )
    })

    const activityList = Object.entries(this.state.activities).map(([key, index]) => {
      return (
        <button onClick={() => {this.handleClick(index)}} key={index}>{index.intro_title}</button>
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