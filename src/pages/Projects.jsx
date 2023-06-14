import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import TestDomeCertificate from "../components/TestDomeCertificate";
const Projects = () => {
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