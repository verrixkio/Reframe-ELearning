import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
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
      workDisplay: {}
    };
  }

  handleClick = (displayVal) => {
    this.setState({ workDisplay: displayVal});
  };

  setNextClick = (currWorkDisplay) => {

    //The workdisplay id can reference our readings array at the proper index for the next reading
    let currValue = currWorkDisplay.id

        //If there is another activity in the readings array, and our current display is not an activity.
        if (this.state.readings[currValue] && !this.state.workDisplay.name) {
          this.setState({ workDisplay: this.state.readings[currValue]});
        
        //If the current display is an activity and there is another activity following.
        } else if (this.state.workDisplay.name && this.state.activities[currValue] ) {
          this.setState({ workDisplay: this.state.activities[currValue]});
          console.log("testing")
        
        //If the current display is an activity and there is another activity following. Needs both because currValue can potentially get set to two above and fail the evaluation.
        } else if (this.state.workDisplay.name && !this.state.activities[currValue] ) {
          console.log("hide that shit")

        // We ended our readings list so start the activties.
        } else {
          this.setState({ workDisplay: this.state.activities[0]});
          console.log('here')
        }
  }

  setPrevClick = (currWorkDisplay) => {
    //The workdisplay id can reference our readings array at the proper index if we minus 2 from it.
    let currValue = currWorkDisplay.id - 2
    this.setState({ workDisplay: this.state.readings[currValue]});
  }


  componentDidMount() {
    axios.get('/api/reading?id=' + this.props.url_id)
      .then(res => {
        this.setState({ readings: res.data});
        this.setState({ workDisplay: res.data});
      })

    axios.get('/api/activity?id=' + this.props.url_id)
    .then(res => {
      this.setState({ activities: res.data});
    })

    axios.get('/api/segment?id=' + this.props.url_id)
    .then(res => {
      this.setState({ segment: res.data[0]});
      console.log(this.state.segment)
    })
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

    //Next/Prev Execises Map
      //So this one instead of linking to the specific page it needs to link to the next page.

        


    // const activityList = Object.entries(this.state.activities).map(([key, index]) => {
    //   return (
    //     <button onClick={() => {this.handleClick(index)}} key={index.name}>{index.intro_title}</button>
    //   )
    // })


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
                
                {this.state.workDisplay && !this.state.workDisplay.name &&
                  <div className="reading-container">
                    <div className="title-box">
                      <h2 key={this.state.workDisplay.title}>{this.state.workDisplay.title}</h2>
                      <p key={this.state.workDisplay.time}>{this.state.workDisplay.time}</p>
                      <h4 key={this.state.workDisplay.intro_title}>{this.state.workDisplay.intro_title}</h4>
                    </div>
                    <div className="introduction-container">
                      <h3>Introduction:</h3>
                      <p key={this.state.workDisplay.intro_desc}>{this.state.workDisplay.intro_desc}</p>
                    </div>
                    <button onClick={() => {this.setNextClick(this.state.workDisplay)}}>Next</button>
                    <button onClick={() => {this.setPrevClick(this.state.workDisplay)}}>Prev</button>
                  </div>
                    // In this logic we need to when we hit click add in some values
                } 
                {this.state.workDisplay.name &&
                <div className="reading-container">
                  <div className="title-box activities">
                    <h2 key={this.state.workDisplay.name}>{this.state.workDisplay.name}</h2>
                    <p key={this.state.workDisplay.time}>{this.state.workDisplay.time}</p>
                    <h4 key={this.state.workDisplay.intro_title}>{this.state.workDisplay.intro_title}</h4>
                  </div>
                  <div className="introduction-container">
                    <h3>Introduction:</h3>
                    <p key={this.state.workDisplay.intro_desc}>{this.state.workDisplay.intro_desc}</p>
                  </div>
                  <button onClick={() => {this.setNextClick(this.state.workDisplay)}}>Next</button>
                  <button onClick={() => {this.setPrevClick(this.state.workDisplay)}}>Prev</button>
                </div>
                }
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