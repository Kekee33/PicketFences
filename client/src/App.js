import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/About";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div class="container">
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Brand</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>
            <li><a href="#">About</a></li>           
          </ul>
        </div>
      </nav>
    </div>
  </Router>

export default App;
