import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import MarkComplete from './MarkComplete';
import Footer from './Footer';

// ******
// Important note: A Reading has a title and an Activity has a name. This controls conditional display logic.
// ******


class ModuleTemplate extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      readings: '', 
      activities: '', 
      segment: '', 
      workDisplay: {},
      completedReadings: {},
      completedActivities: {},
    };
  }

  handleClick = (displayVal) => {

    this.setState({ workDisplay: displayVal});
    
  };

  //The "next" button on the main page to go to the next reading/activity/module.
  setNextClick = (currWorkDisplay) => {

    //The workdisplay id can reference our readings array at the proper index for the next reading
    let currValue = currWorkDisplay.id

    //If there is another activity in the readings array, and our current display is not an activity.
    if (this.state.readings[currValue] && !this.state.workDisplay.name) {
      this.setState({ workDisplay: this.state.readings[currValue]});
    
    //If the current display is an activity and there is another activity following.
    } else if (this.state.workDisplay.name && this.state.activities[currValue] ) {
      this.setState({ workDisplay: this.state.activities[currValue]});
    
    //If the current display is an activity and there is another activity following. Needs both because currValue can potentially get set to two above and fail the evaluation.
    } else if (this.state.workDisplay.name && !this.state.activities[currValue] ) {
      console.log("button should go to next module.")

    // We ended our readings list so start the activties.
    } else {
      this.setState({ workDisplay: this.state.activities[0]});
    }
  }

  //The "previous" button on the main page to go back a reading/activity/module.
  setPrevClick = (currWorkDisplay) => {

    //Get the array index associated with previous exercise or reading.
    let currValue = currWorkDisplay.id - 2

    //Get the max reading length for where to begin our reading previous button.
    let highestreading = this.state.readings.length - 1

    //Prevent a user from going back where a reading doesnt exist. As well as redirect them to the previous learning module.
    if (currValue === -1 && this.state.workDisplay.title) {
      console.log("hol up going back?")
    
    //If our current display is an activity and not the end of the activities array.
    } else if (this.state.workDisplay.name && currValue >= 0) {
      this.setState({ workDisplay: this.state.activities[currValue]});

    //If its the end of the activity array start at the top of the reading array.
    } else if (currValue === -1 && this.state.workDisplay.name) {
      this.setState({ workDisplay: this.state.readings[highestreading]});
    
    //Otherwise just go back to a previous reading.
    } else {
      this.setState({ workDisplay: this.state.readings[currValue]});
    }
  }

// Fetching Data
  componentDidMount() {
    axios.get('/api/reading?id=' + this.props.url_id)
      .then(res => {
        this.setState({ readings: res.data});
        this.setState({ workDisplay: res.data});
        
        axios.get('/api/activity?id=' + this.props.url_id)
        .then(res => {
          this.setState({ activities: res.data});
          axios.get('/api/segment?id=' + this.props.url_id)
          .then(res => {
            this.setState({ segment: res.data[0]});
            axios.get('/api/readingcompletion?segment_id=' + this.props.url_id + `&&user_id=` + 1)
            .then(res => {
              this.setState({ completedReadings: res.data});
              axios.get('/api/activitycompletion?segment_id=' + this.props.url_id + `&&user_id=` + 1)
              .then(res => {
                this.setState({ completedActivities: res.data});
              })
            })
          })
        })
      })
    //This should get all the completed activities within a specific module and a specific user.
    // ****
    //Important - this will need to pull the session data of the user once it is set up
    //****
  }

  render() {
    // SideNav Maps
    const readingList = Object.entries(this.state.readings).map(([key, index]) => {
      return (
        <button value={this.state.readings[index]} onClick={() => {this.handleClick(index)}} key={index + key}>{index.title}</button>
        
      )
    })

    const activityList = Object.entries(this.state.activities).map(([key, index]) => {
      return (
        <button onClick={() => {this.handleClick(index)}} key={index.name}>{index.intro_title}</button>
      )
    })

      return (
        <div>
          <NavBar/>

          <div className="main-content">
            <div className="row">
              <div className="side-nav col-3 no-gutters">

                <span className="side-bar-title">Module: {this.state.segment.module_id}<br></br>
                {this.state.segment.name}</span>
                <h4>Readings:</h4>
                {readingList}
                <h4>Activities:</h4>
                {activityList}
              </div>

              <div className="workbar col-9 no-gutters">
                <div className="reading-container">
                  {this.state.workDisplay && !this.state.workDisplay.name &&
                  <div className="display-info">
                    <div className="title-box">
                      <h2 key={this.state.workDisplay.title}>{this.state.workDisplay.title}</h2>
                      <p key={this.state.workDisplay.time}>{this.state.workDisplay.time}</p>
                      <h4 key={this.state.workDisplay.intro_title}>{this.state.workDisplay.intro_title}</h4>

                      {/* Conditional Logic for if the reading has been completed at the current index of work display */}
                      {this.state.completedReadings[this.state.workDisplay.id - 1] &&
                        <div>
                          <h4>Completed :)</h4>
                        </div>
                      }

                    </div>
                    <div className="introduction-container">
                      <h3>Introduction:</h3>
                      <p key={this.state.workDisplay.intro_desc}>{this.state.workDisplay.intro_desc}</p>
                    </div>
                  </div>
                }

                {this.state.workDisplay.name &&
                  <div className="display-info">
                    <div className="title-box activities">
                      <h2 key={this.state.workDisplay.name}>{this.state.workDisplay.name}</h2>
                      <p key={this.state.workDisplay.time}>{this.state.workDisplay.time}</p>
                      <h4 key={this.state.workDisplay.intro_title}>{this.state.workDisplay.intro_title}</h4>
                    </div>
                    <div className="introduction-container">
                      <h3>Introduction:</h3>
                      <p key={this.state.workDisplay.intro_desc}>{this.state.workDisplay.intro_desc}</p>
                    </div>
                  </div>
                  }
                  <button onClick={() => {this.setPrevClick(this.state.workDisplay)}}>Prev</button>
                  <MarkComplete currentExercise={this.state.workDisplay} user={1} segmentId={this.state.segment.id} 
                  completedReadings={this.state.completedReadings} completedActivities={this.state.completedActivities}/>
                  <button onClick={() => {this.setNextClick(this.state.workDisplay)}}>Next</button>
                </div>
              </div>
              {/* Component for Rendering the next button links at bottom of page */}
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