import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

const About = () =>
  <div>
    <Fence backgroundImage="">
      <h1>Picket Fences</h1>
      <h2>Helping you find a house and make it a HOME!</h2>
    </Fence>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Picket Fences!!</h1>
        </Col>
      </Row>
    </Container>
  </div>


export default About;
