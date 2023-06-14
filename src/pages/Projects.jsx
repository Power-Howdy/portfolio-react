import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import TestDomeCertificate from "../components/TestDomeCertificate";
import { nanoid } from "nanoid";
const Projects = () => {
  const certificates = [
      {
        skill: "Web Developer",
        url: "https://www.testdome.com/certificates/1688bf88509143ae81f2ddd399fb3dd1"
      },
      {
        skill: "HTML/CSS",
        url: "https://www.testdome.com/certificates/cf2a2eb0a5c841d7aa20ef77f9e4ddce"
      },
      {
        skill: "Javascript",
        url: "https://www.testdome.com/certificates/22ddae8543584dc5be08bb3a351dc5a3"
      },
      {
        skill: "React",
        url: "https://www.testdome.com/certificates/828bd8656a104c8184596b0840d47fe2"
      },
      {
        skill: "SQL",
        url: "https://www.testdome.com/certificates/6cfdd8d058364e7cab8bba18db616d53"
      },
      {
        skill: "PHP",
        url: "https://www.testdome.com/certificates/df04f07712c544cfbe0761354767b4f9"
      },
      {
        skill: "Node.js",
        url: "https://www.testdome.com/certificates/084c13d377b84a2ca01ac67c58096ed1"
      }
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
        { certificates.map((certificate) => <Col key={nanoid()} md={3} className="project-card">
          <TestDomeCertificate key={nanoid()} skill={certificate.skill} url={certificate.url}/>
          </Col>)}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects