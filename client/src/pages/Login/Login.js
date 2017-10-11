import React, { Component } from "react";
import ReactDOM from "react-dom";

/* App.jsx */
class Login extends React.Component { 
    render() {
      return (
        <div className='form'>
          <div className='form_logo'>
            Lo<span>g</span>o
          </div>
          <div className='form_title'>
            Log<span>I</span>n
          </div>
          <form className='form_items'>
            <div className='form_inputs'>
              <input 
                type='text'
                required
                />
              <label>username or email</label>
            </div>
            <div className='form_inputs'>
              <input
                type='password'
                required
                />
              <label>password</label>
            </div>
            <button className='form_button'>Log In</button>
          </form>
          <div className='form_other'>
            <a href='#'>forgot password?</a>
            <a href='#'>Join Now</a>
          </div>
        </div>
      );
    }
    
  }
  
  /* main.js */
  class Main extends React.Component{
    render(){
      return (
        <div>
          <Login />
        </div>
      );
    }
  };
  
  ReactDOM.render(
    <Main />,
    document.querySelector('#root')
  );
  
export default Login;