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

    this.setState({ workDisplay: displayVal});

  };


    //This onlick needs to update the state of workDisplay with the relevant information being clicked.
    
    
    // this.state.workDisplay.update(this.state.);

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
                {this.state.workDisplay && !this.state.workDisplay.objective &&
                  <div>
                    <h4 key={this.state.workDisplay.title}>{this.state.workDisplay.title}</h4>
                    <p key={this.state.workDisplay.time}>{this.state.workDisplay.time}</p>
                    <h4 key={this.state.workDisplay.intro_title}>{this.state.workDisplay.intro_title}</h4>
                    <h4 key={this.state.workDisplay.intro_desc}>{this.state.workDisplay.intro_desc}</h4>
                  </div>
                    // In this logic we need to when we hit click add in some values
                } 
                {this.state.workDisplay.objective &&
                  <div>
                    <h4 key={this.state.workDisplay.name}>{this.state.workDisplay.name}</h4>
                    <p key={this.state.workDisplay.time}>{this.state.workDisplay.time}</p>
                    <h4 key={this.state.workDisplay.intro_title}>{this.state.workDisplay.intro_title}</h4>
                    <h4 key={this.state.workDisplay.intro_desc}>{this.state.workDisplay.intro_desc}</h4>
                  </div>
                }
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