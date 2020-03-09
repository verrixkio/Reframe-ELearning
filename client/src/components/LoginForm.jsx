import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {

constructor(props){
    super(props);
    this.state = { email: '', password: '', message: 'Click the button to load data!'};
    }
    
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
	};
	
	onSubmit = event => {
		event.preventDefault();
		axios.post('/api/login', {
			email: this.state.email,
			password: this.state.password
		  })
		  .then(function (response) {
			console.log(response);
			window.location = "/"
		  })
		  .catch(function (error) {
			console.log(error);
		  });

	};

  render() {
    return (
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-26">
						Welcome
					</span>
					<span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"></i>
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                        <input 
                            className="input100" 
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}/>

						<span className="focus-input100" data-placeholder="Email"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
                        <input 
                            className="input100" 
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}/>

						<span className="focus-input100" data-placeholder="Password"></span>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" onClick={this.onSubmit}>
								Login
							</button>
						</div>
					</div>

					<div className="text-center p-t-115">
						<span className="txt1">
							Don’t have an account?
						</span>

						<a className="txt2" href="www.google.com">
							Sign Up
						</a>
					</div>
				</form>
                <h3>Your username is: {this.state.email}</h3>
                <h3>Your password is: {this.state.password}</h3>

				<h3>Login info passed is: {this.state.message} </h3>
			</div>
		</div>
	</div>
    );
  }
}

export default LoginForm;