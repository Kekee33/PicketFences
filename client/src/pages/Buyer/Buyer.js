import React, { Component } from "react";
import "./Buyer.css";
import TodoList from "../../components/TodoList";
import Calendar from "../../components/Calendar";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import BuyerResources from "../../components/BuyerResources";
import RealtorDropdown from "../../components/RealtorDropdown/RealtorDropdown";
import InspectorDropdown from "../../components/InspectorDropdown/InspectorDropdown";
import LenderDropdown from "../../components/LenderDropdown/LenderDropdown";



class Buyer extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="realtorDropdown">
          <RealtorDropdown />
        </div>
        <div className="inspectorDropdown">
          <InspectorDropdown />
        </div>
        <div className="lenderDropdown">
          <LenderDropdown />
        </div>
        <div className="homeSearch">
          <h1>Home Search</h1>
          <SearchForm />
        </div>
        <div className="calendar">
          <Calendar />
        </div>
        <div className="todo">
          <h3>Enter Today's Tasks</h3>
          <TodoList />
        </div>

        <div className="buyerResources">
          
          <BuyerResources />
        </div>
      </div>
      
    );
  }
}

export default Buyer;










