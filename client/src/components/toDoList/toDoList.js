import React, { Component } from "react";
import "./TodoList.css";
import TodoItems from '../TodoItems/TodoItems';
import Container from "../Container/Container";
import Row from "../Row/Row";
import Col from "../Col/Col";



class TodoList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [],
      inputVal: ''
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift(
        {
          text: this._inputElement.value,
          key: Date.now()
        }
      );

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    }

    console.log(itemArray);

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  handleChange = (e) => {
    //let val = e.target.value;
    this.setState({
      inputVal: e.target.value
    })
  }
  render() {

    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-6">
              <div className="todoListMain body">
                <div className="header">
                  <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a} 
                      placeholder="enter task" >
                     </input>
                    {/* <input type='text' value={this.state.inputVal} onChange={this.handleChange} placeholder='enter task' /> */}
                    <button type="submit">add</button>
                  </form>
                </div>
                <TodoItems entries={this.state.items}
                  delete={this.deleteItem} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default TodoList;