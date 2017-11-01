import React, { Component } from "react";
import "./RealtorResources.css";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";

class RealtorResources extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">Recent Contacts</div>
                    <table className="table">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td>Jane</td>
                            <td>Smith</td>
                            <td>jane@yahoo.com</td>
                        </tr>
                        <tr>
                            <td>Bob</td>
                            <td>Johnson</td>
                            <td>bobby@aol.com</td>
                        </tr>
                        <tr>
                            <td>Beth</td>
                            <td>James</td>
                            <td>bethanyj@gmail.com</td>
                        </tr>

                    </table>
                </div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">External Links</h3>
                    </div>
                    <div className="panel-body">
                        <a href="http://matrix.savannahmulti-list.com" target="_blank">Savannah Matrix</a><br />
                        <a href="http://http://boa.chathamcounty.org/" target="_blank">Chatham County Tax Assesor</a><br />
                        <a href="http://www.qpublic.net/ga/effingham/" target="_blank">Effingham County Tax Assesor</a><br />
                        <a href="http://www.qpublic.net/ga/bryan/" target="_blank">Bryan County Tax Assesor</a><br />
                        <a href="http://realtor.com" target="_blank">Realtor.com</a><br />
                    </div>
                </div>
            </div >  
                  
           


        );
    }
}





export default RealtorResources;
