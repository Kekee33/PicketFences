import React, { Component } from "react";
import "./Realtor.css";
import TodoList from "../../components/TodoList";
import Calendar from "../../components/Calendar";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";


class Realtor extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-6">
              <div className="todo">
                <Calendar />
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <div className="calendar">
                <h1>To Do's</h1>
                <TodoList />
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <div className="homeSearch">
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

export default Realtor;