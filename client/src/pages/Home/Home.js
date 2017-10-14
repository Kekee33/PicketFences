import React, { Component } from "react";
import "./Home.css";
//import Fence from "../../components/Fence/Fence";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Col from "../../components/Col/Col";
import Fence from "../../components/Fence/Fence";



const Home = () =>
<div>
<Fence backgroundImage="https://thumbs.dreamstime.com/z/old-picket-fence-13101238.jpg"></Fence>    
  <Container style={{ marginTop: 30 }}>
    <Row>
      <Col size="md-12">
        <h1>Welcome To Picket Fences!</h1>
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
          et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
          gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis
          mi sollicitudin turpis semper, et interdum risus lobortis.          
        </p>
        </Col>
      </Row>
    </Container>
  </div>;





export default Home;






