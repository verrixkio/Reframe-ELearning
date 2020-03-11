import React, { Component } from 'react';
import ModuleTemplate from './components/ModuleTemplate';
import CourseHome from './components/CourseHome';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

import './css/application.css';

import { BrowserRouter as Router, Route} from "react-router-dom";


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  render() {
    return (
      <div className="App">
        <CourseHome/>
      </div>
    );
  }
}

function Login () {
  return (
    <LoginForm/>
  )
}

function Register () {
  return (
    <RegisterForm/>
  )
}

function Module () {
  return (
    <ModuleTemplate/>
  )
}


function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/course" component={Module} />
      </div>
    </Router>
  );
}

export default AppRouter;
