import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';


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
    //Array value of current Reading.
    let currValue = currWorkDisplay.id
    //This should simply set workdisplay to the previous value.
    //Access the next reading.
    console.log(this.state.readings[currValue], "here is our next reading")
    this.setState({ workDisplay: this.state.readings[currValue]});
    console.log(currValue, "this is our current array accessor.")
  }

  setPrevClick = (currWorkDisplay) => {
        //Array value of current Reading.
        let currValue = currWorkDisplay.id - 2
        //This should simply set workdisplay to the previous value.
        //Access the next reading.
        console.log(this.state.readings[currValue], "here is our next reading")
        this.setState({ workDisplay: this.state.readings[currValue]});
        console.log(currValue, "this is our current array accessor.")
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
                
                {this.state.workDisplay && !this.state.workDisplay.objective &&
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
                {this.state.workDisplay.objective &&
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