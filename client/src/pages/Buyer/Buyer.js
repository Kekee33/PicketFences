import React, { Component } from "react";
import "./Buyer.css";
import TodoList from "../../components/TodoList";
import Calendar from "../../components/Calendar";


class Buyer extends Component {
  render() {
    return (
      <div className="Buyer">        
          <h1>Buyer Landing Page</h1>          
          <TodoList />
          <Calendar /> 
      </div>
    );
  }
}

export default Buyer;










