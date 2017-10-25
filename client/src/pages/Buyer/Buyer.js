import React, { Component } from "react";
import "./Buyer.css";
import TodoList from "../../components/TodoList";
import Calendar from "../../components/Calendar";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";


class Buyer extends Component {
  render() {
    return (
      <div>        
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-6">
          <div className="todo">
            <Calendar />
            <TodoList />
          </div>
          </Col>
        </Row>
        <Row>
      <Col size="md-12">
       <div className="calendar">
       <h1>Home Search</h1>       
       <SearchForm />
       </div>
       </Col>
       </Row>
       </Container>
       </div>
     
      
    );
  }
}

export default Buyer;










