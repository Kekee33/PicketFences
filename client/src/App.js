import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


const App = () =>
  <Router>
    <div class="container">
    <div>
      <Nav />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />        
      </Wrapper>
      <Footer />
    </div>
    </div>
  </Router>

export default App;
