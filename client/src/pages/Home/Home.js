import React from "react";
import "./Home.css";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Col from "../../components/Col/Col";



const Home = () =>
<div>
  <Container style={{ marginTop: 30 }}>
    <Row>
      <Col size="md-12">
      <div className="header">
        <h1>Welcome to the Boardwalk!</h1>
      </div>
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
       <div className="welcome">
        <p>
          Welcome to the Boardwalk, your one stop shop for all things Real Estate. From your personal page you will be 
          able to search for homes, schedule appointments and stay in contact with your REALTOR®! You will have access 
          to resources that are designed to keep you informed every step of the way! We are here to walk you through the 
          process and answer all of your questions. If we can't, we will point you in the direction of someone who can!! 
          Here at the Boardwalk we will go the extra mile in helping you with the purchase of your new home.         
        </p>
        </div>
        </Col>
      </Row>
    </Container>
  </div>





export default Home;






