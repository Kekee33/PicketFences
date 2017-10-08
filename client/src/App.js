import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/About";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />        
      </Wrapper>
      <Footer />
    </div>
 </Router>          

export default App;
