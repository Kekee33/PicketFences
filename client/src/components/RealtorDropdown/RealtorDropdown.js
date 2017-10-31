import React, { Component } from "react";
import "./RealtorDropdown.css";

class RealtorDropdown extends Component {
    render() {
        return (
            <div>
                <div className="panel realtors" >
                    <div className="dropdown">
                        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Choose your Realtor
                                <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a>John Smith</a></li>
                            <li><a>Jessica James</a></li>
                            <li><a>Karen Johnson</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a>Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
          
        );
    }
}

export default RealtorDropdown;