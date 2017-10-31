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
import Rates from "../../components/Rates/Rates";




class Realtor extends Component {
  render() {
    return (
      <div className="container bg">
        <Container>        
             
               <Row>
                 <Col size="md-6">
                   <div className="calendar">
                     <Calendar />
                   </div>
                 </Col>
                 <Col size="md-6">
                   <div className="homeSearch">
                     <h1>Home Search</h1>
                      <SearchForm />
                   </div>
                 </Col>
              
               </Row>
               <Row>
                <Col size="md-6">
                  <div className="todo">
                    <TodoList />
                  </div>
                </Col>
                <Col size="md-3">
                   <div className="rates">                     
                     <Rates />                     
                   </div>
                 </Col>
               </Row> 
                <Row>       
                <Col size="md-3">
                   <div className="realtorResources">                     
                     <RealtorResources />
                      
                   </div>
                 </Col>
               </Row>        
      
            </Container>
          </div>
    
    
        );
      }
    }

export default Realtor;