import React from "react";
import "./Home.css";
//import Fence from "../../components/Fence/Fence";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Col from "../../components/Col/Col";
import Fence from "../../components/Fence/Fence";



const Home = () =>
<div>
  <Container style={{ marginTop: 30 }}>
    <Row>
      <Col size="md-12">
      <div className="header">
        <h1>Welcome To Picket Fences!</h1>
      </div>
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
       <div className="welcome">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
          et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
          gravida. Duis eget vestibulum quam, ut porttitor sem. As your REALTOR 
          we will go the extra mile in helping you with the purchase of your new home.         
        </p>
        </div>
        </Col>
      </Row>
    </Container>
  </div>;





export default Home;






