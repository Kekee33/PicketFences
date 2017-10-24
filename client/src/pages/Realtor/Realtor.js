import React, { Component } from "react";
import "./Realtor.css";
import TodoList from "../../components/TodoList";
import Calendar from "../../components/Calendar";

class Realtor extends Component {
  render() {
    return (
      <div className="Buyer">        
          <h1>Realtor Landing Page</h1> 
          <TodoList /> 
          <Calendar />
      </div>
    );
  }
}

  export default Realtor;