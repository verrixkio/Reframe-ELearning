import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';


class CourseHome extends React.Component {

  constructor(props){
      super(props);
      this.state = { course: ''};
  }

  componentDidMount() {
    axios.get('/api/course')
      .then(res => {
        this.setState({ course: res.data[0]});
        console.log(this.state.course)
      })


  }

  render() {
      return (
        <div>
          <NavBar/>

          <div className="main-content">
            
            {/* Main Header */}
            <div className="row align-items-center justify-content-center">
              <div className="col-6">
                <div className="text-container">
                  <h3>Welcome to Reframe E-Learning. You'll be led through a series of Courses and Workshops so you can efficiently master the skills you need to achieve your goals.</h3>
                  <button>Take a tour.</button>
                </div>
              </div>
              <div className="col-6">
                <div className="image-container">
                  <img src={require("../media/courseHome/pawns.jpg")} alt="hero"/>
                </div>
              </div>
            </div>

          {/*FrameWork and Course Infrastructure.*/}
          <div className="row align-items-center justify-content-center">
            {/* Linear Framework Matrix Design */}
            <div className="col-6">
              <div className="grid">

                <div className="row">
                  <div className="border">

                  </div>
                  <div className="border">

                  </div>
                  <div className="border">

                  </div>
                  <div className="border">

                  </div>
                </div>

                <div className="row">
                  <div className="border">

                  </div>
                  <div className="border">

                  </div>
                  <div className="border">

                  </div>
                  <div className="border">

                  </div>
                </div>

                <div className="row">
                  <div className="border">

                  </div>
                  <div className="border">
                    
                  </div>
                  <div className="border">

                  </div>
                  <div className="border">

                  </div>
                </div>
              </div>

            </div>
            {/* Side Bar for Course Description */}
            <div className="col-6">
              <div className="course-container">
                <h3>{this.state.course.name}</h3>
                <p>Completion Time: {this.state.course.completion_time}</p>
                {/* Progress bar component. */}
                <h4>Course Description</h4>
                <p>{this.state.course.description}</p>
                <h5>{this.state.course.value_props}</h5>
              </div>
            </div>
          </div>

          {/* Pathway of Course Work */}
          <div className="pathway">
            <div className="row align-items-center justify-content-center">
              <h1>Component that renders out each module of the course.</h1>
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