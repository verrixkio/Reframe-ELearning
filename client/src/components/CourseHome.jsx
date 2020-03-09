import React from 'react';
import NavBar from './NavBar';


class CourseHome extends React.Component {

  constructor(props){
      super(props);
      this.state = { email: '', password: '', message: 'Click the button to load data!'};
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
                  <img src={require("../media/courseHome/pawns.jpg")}/>
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
              <div className="image-container">
                <img src={require("../media/courseHome/pawns.jpg")}/>
              </div>
            </div>
          </div>
        {/* Closing Main Content Div */}
        </div>
      {/* Closing Overall Render Div */}
      </div>
    );
  }
}

export default CourseHome;