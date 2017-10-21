import React, { Component } from "react";
import "./Realtor.css";
import Calendar from "../../components/Calendar";
import toDoList from "../../components/Todolist";

class Realtor extends Component {
  render() {
    return (
      <div className="Buyer">        
          <h1>Realtor Landing Page</h1> 
          <Calendar />
          <toDoList /> 
      </div>
    );
  }
}

  export default Realtor;