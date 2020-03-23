import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';


class CourseHome extends React.Component {

  constructor(props){
      super(props);
      this.state = { course: '', segments: ''};
  }

  //Both these axios requests will need to take params once we have more than one course.
  componentDidMount() {
    axios.get('/api/course')
      .then(res => {
        this.setState({ course: res.data[0]});
      })

    axios.get('/api/segment?id=1')
      .then(res => {
        this.setState({ segments: res.data}, () => {
        })

      })

  }

  render() {

    const segmentObjects = Object.entries(this.state.segments).map(([key, segment]) => {
        return segment
    })

    //Segment render handles rendering each segement at the bottom of the page and creating a link to the area. 
    // Id's of each segement must map their appropriate content.
    
    const segmentRender = Object.entries(segmentObjects).map(([key, segmentInfo]) => {
      return (
        <form action={"/course/" + segmentInfo.id}>
          <button class="btn-circle btn-md" type="submit">{segmentInfo.name}</button>
        </form>
      )
    })

      return (
        <div>
          <NavBar/>

          <div className="main-content">
            
            {/* Main Header */}
            <div className="row align-items-center justify-content-center hero-section">
              <div className="col-6">
                <div className="text-container">
                  <h3>Welcome to Reframe E-Learning. You'll be led through a series of Courses and Workshops so you can efficiently master the skills you need to achieve your goals.</h3>
                  <button type="button" class="btn btn-primary">Take a tour.</button>
                </div>
              </div>
              <div className="col-6">
                <div className="image-container">
                  <img src={require("../media/courseHome/pawns.jpg")} alt="hero"/>
                </div>
              </div>
            </div>

          {/*FrameWork and Course Infrastructure.*/}
          <div className="row">
            {/* Linear Framework Matrix Design */}
            <div className="col-8 nopadding">
                <img class="framework" src={require("../media/courseHome/basic_framework.jpg")} alt="basicframework"></img>
            </div>
            {/* Side Bar for Course Description */}
            <div className="col-4 nopadding">
              <div className="course-container">
                <div className="heading">
                  <h3>{this.state.course.name}</h3>
                  <p>Completion Time: {this.state.course.completion_time} h</p>
                </div>
                <div className="progress">
                  <div className="progress-bar">20%</div>
                </div>
                {/* Progress bar component. */}
                <div className="description">
                  <h4>Course Description</h4>
                  <p>{this.state.course.description}</p>
                  <h5>{this.state.course.value_props}</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Pathway of Course Work */}
          <div className="pathway">
            <div className="row align-items-center justify-content-center">
              {segmentRender}
              {/* Component that renders out each module of the course */}

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

export default CourseHome;