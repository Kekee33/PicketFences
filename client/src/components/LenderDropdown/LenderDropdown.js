import React, { Component } from "react";
import "./LenderDropdown.css";

class LenderDropdown extends Component {
    state={
        val: "Choose your Lender"
    }

    handleChange = (event) => {
        this.setState({val: event.target.value})
    }
    render() {
        return (
            <div>
                <div className="panel lender" >
                <h5>Choose Your Lender</h5>
                        <select value={this.state.val} onChange={this.handleChange}>
                            <option value="Choose your Lender"><a>Choose Your Lender</a></option>
                            <option value="Valerie Donald"><a>Valerie Donald</a></option>
                            <option value="Susanne Browne"><a>Susanne Browne</a></option>
                            <option value="Wesley Harold"><a>Wesley Harold</a></option>
                            <option value="Scottie Datsun"><a>Scottie Datsun</a></option>
                            <option value="Omar Barry"><a>Omar Barry</a></option>
                            <option value="Dewayne Matthews"><a>Dewayne Matthews</a></option>
                        </select>
                    </div>
            </div>
          
        );
    }
}

export default LenderDropdown;