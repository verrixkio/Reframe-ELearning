import React, { Component } from 'react';
import axios from 'axios';
import ModuleTemplate from './components/ModuleTemplate';
import CourseHome from './components/CourseHome';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

import './css/application.css';

import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Link,
  useParams
} from "react-router-dom";


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      readings: ''
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
  let { id } = useParams();
  return (
    <ModuleTemplate url_id={id}/>
  )
}


function AppRouter() {
 


  return (
    <Router>
      <div>
        {/* Will Make a path that holds our home index/non member portal */}
        <Route path="/course" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Switch>
          <Route path="/course/:id" component={Module} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
