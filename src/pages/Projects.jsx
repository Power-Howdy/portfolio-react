import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import TestDomeCertificate from "../components/TestDomeCertificate";
const Projects = () => {
  useEffect(() => {
    fetch("https://some.url/certificates.json")
      .then((res) => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])
  const certificates = [
    { 'React': 'https://www.testdome.com/certificates/828bd8656a104c8184596b0840d47fe2'}
  ];
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
          <Col md={4} className="project-card">
            { certificates.map((certificate) => <TestDomeCertificate key={certificate.skill} skill={certificate.skill} url={certificate.url}/>)}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects