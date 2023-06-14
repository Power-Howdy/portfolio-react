import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import TestDomeCertificate from "../components/TestDomeCertificate";
import { nanoid } from "nanoid";
import axios from "axios";
const Projects = () => {
  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    axios.get('/certificates.json')
    .then(res => {
      setCertificates(res.data.data);
    })
  }, [])
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="yellow">Certificates Earned</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I've earned so far.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        { certificates.map((certificate) => <Col key={nanoid()} md={3} className="project-card">
          <TestDomeCertificate key={nanoid()} skill={certificate.skill} url={certificate.url}/>
          </Col>)}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects