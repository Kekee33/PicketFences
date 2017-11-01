import React, { Component } from "react";
import "./RealtorDropdown.css";

class RealtorDropdown extends Component {
    state={
        val: "Choose your Realtor"
    }

    handleChange = (event) => {
        this.setState({val: event.target.value})
    }
    render() {
        return (
            <div>
                <div className="panel realtors" >
                <h5>Choose Your Realtor</h5>
                        <select value={this.state.val} onChange={this.handleChange}>                            
                            <option value="Choose your Realtor"><a>Choose Your Realtor</a></option>
                            <option value="John Smith"><a>John Smith</a></option>
                            <option value="Jessica James"><a>Jessica James</a></option>
                            <option value="Karen Johnson"><a>Karen Johnson</a></option>
                            <option value="Dewayne Scott"><a>Dewayne Scott</a></option>
                            <option value="Oliver Twist"><a>Oliver Twist</a></option>
                            <option value="Joann Dan"><a>Joann Dan</a></option>
                        </select>
                    </div>
            </div>
          
        );
    }
}

export default RealtorDropdown;