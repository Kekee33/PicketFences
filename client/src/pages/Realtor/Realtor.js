import React, { Component } from "react";
import "./Realtor.css";
import TodoList from "../../components/TodoList";
import Calendar from "../../components/Calendar";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
//import Search from "../../components/Search/Search";
import RealtorResources from "../../components/RealtorResources/RealtorResources";
//import Rates from "../../components/Rates/Rates";
import Email from "../../components/Email/Email"




class Realtor extends Component {
  render() {
    return (
          <div className="wrapper">
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
              <div className="realtorResources">                
                <RealtorResources />
              </div>
              <div className="email">
                <Email />
                </div>
              {/* <div className="rates">                     
                     <Rates />                     
                   </div> */}
            </div>
            
          );
        }
      }
      
      
                
                   

export default Realtor;