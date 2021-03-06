import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import LoaderButton from "../../components/LoaderButton/LoaderButton";
import "./Login.css";
//import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <h1>Login</h1><br />
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
        {/*<LoaderButton        
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Login"
          loadingText="Logging in…"          
        />*/}
        <a className="btn btn-default btn-lg btn-block" href="/buyer" role="button">Login as Buyer</a><br />
        <a className="btn btn-default btn-lg btn-block" href="/realtor" role="button">Login as Realtor</a>
        </form>
      </div>
    );
  }
}

export default Login;