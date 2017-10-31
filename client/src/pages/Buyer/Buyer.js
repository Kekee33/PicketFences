import React, { Component } from "react";
import "./Buyer.css";
import TodoList from "../../components/TodoList";
import Calendar from "../../components/Calendar";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import BuyerResources from "../../components/BuyerResources";
//import SearchResults from "../../components/SearchResults";
//import Search from "../../components/Search/Search";
import RealtorDropdown from "../../components/RealtorDropdown/RealtorDropdown";

class Buyer extends Component {
  render() {
    return (
      <div className="container bg">
        <Container>
    
        <Row>
             <Col size="md-6">
               <div className="realtorDropdown">
                 <RealtorDropdown />
               </div>
             </Col>
        </Row>

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
            <Col size="md-6">
               <div className="buyerResources">
                 <h1>Buyer Resources</h1>
                 <BuyerResources />                
               </div>
             </Col>
           </Row>        
  
        </Container>
      </div>


    );
  }
}

export default Buyer;










