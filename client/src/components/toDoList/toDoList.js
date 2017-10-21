import React, { Component } from "react";
import "./Todolist.css";
import AddTask from "../../components/AddTask/AddTask";
import AppList from "../../components/AppList/AppList";

class Todolist extends Component {
    render() {
      return (
          <div className="todo">
            <h1>ToDo App</h1>
              <AddTask />
                <AppList />
          </div>
    );
  }
}
export default Todolist;
