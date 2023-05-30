import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <span>Dedicated to creating impactful solutions!</span>
          </Col>
          <Col md="4" className="footer-copywright">
            <span>Copyright © {year}</span>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer