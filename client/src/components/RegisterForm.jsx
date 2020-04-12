import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {

constructor(props){
    super(props);
    this.state = { email: '', password: '', role: ''};
    }
    
    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
	};
	
	onSubmit = event => {
    event.preventDefault();
    console.log(event)

		axios.post('/api/register', {
			email: this.state.email,
      password: this.state.password,
      role: this.state.role
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
				<form onSubmit={this.handleSubmit} id="submission" className="login100-form validate-form">
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

          <div className="wrap-input100 validate-input" data-validate="Enter password">
            <div class="dropdown">
              <label for="role">What is your role?:</label>

              <select name="role" onChange={this.handleChange}>
                <option value="">--Please choose an option--</option>
                <option value="Exec/VP">Exec/VP</option>
                <option value="	Director/Senior Manager">	Director/Senior Manager</option>
                <option value="Manager">Manager</option>
                <option value="	Supervisor">Supervisor</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" type="submit" value="Submit">
                Register
							</button>
						</div>
					</div>
				</form>

					<div className="text-center p-t-115">
						<span className="txt1">
							Already have an account?
						</span>

						<a className="txt2" href="/login">
							Login
						</a>
					</div>
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