import React, { Component } from "react";
import "./Rates.css";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";





class Rates extends Component {
    render() {
        return (
            <div>
                <Container>
            <Row>
                <Col size="md-3">
                    <div className="rates">                        
                    </div>
                </Col>
            </Row>
            </Container>
            </div>
        );
    }
}

            export default Rates;