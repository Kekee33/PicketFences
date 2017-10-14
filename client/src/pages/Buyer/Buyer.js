import React, { Component } from "react";
import "./Buyer.css";
import Fence from "../../components/Fence/Fence";
import Container from "../../components/Container/Container";

const toDoForm = ({addTodo}) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />

      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
        }}>
        +
        </button>
        </div>
  );
};
  
  
  
  
  
  
  render() {
      return (
        <div className="Home">                   
            <h1>Buyer Landing Page</h1>
            <Container style={{ minHeight: "80%" }}>
            <h1 className="text-center">Search By Breed!</h1>
          </Container>
        </div>
      );
    }
  }
  
  export default Buyer;