import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import RouteNavItem from "./components/RouteNavItem";
//import Search from "./components/Search/Search"



class App extends Component {
  render() {
    return (
      <div className="App container">        
            <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav pullRight>
          <RouteNavItem href="/login">Login</RouteNavItem>
          <RouteNavItem href="/signup">Signup</RouteNavItem>          
          <RouteNavItem href="/">Logout</RouteNavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
