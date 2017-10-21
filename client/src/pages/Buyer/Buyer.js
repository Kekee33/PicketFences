import React, { Component } from "react";
import "./Buyer.css";
import Todolist from "../../components/Todolist";


class Buyer extends Component {
  render() {
    return (
      <div className="Buyer">        
          <h1>Buyer Landing Page</h1>          
          <Todolist />  
      </div>
    );
  }
}

export default Buyer;










