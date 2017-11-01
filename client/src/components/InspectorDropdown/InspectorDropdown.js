import React, { Component } from "react";
import "./InspectorDropdown.css";

class InspectorDropdown extends Component {
    state={
        val: "Choose your Inspector"
    }

    handleChange = (event) => {
        this.setState({val: event.target.value})
    }
    render() {
        return (
            <div>
                <div className="panel inspector" >
                <h4>Choose Your Realtor</h4>
                        <select value={this.state.val} onChange={this.handleChange}>
                            <option value="Choose your Inspector"><a>Choose Your Inspector</a></option>
                            <option value="Don McDonald"><a>Don McDonald</a></option>
                            <option value="Kevin Hamm"><a>Kevin Hamm</a></option>
                            <option value="Jackie Harrison"><a>Jackie Harrison</a></option>
                            <option value="Scott Byrd"><a>Scott Byrd</a></option>
                            <option value="Olsen Connor"><a>Olson Conner</a></option>
                            <option value="Jafar Nunn"><a>Jafar Nunn</a></option>
                        </select>
                    </div>
            </div>
          
        );
    }
}

export default InspectorDropdown;