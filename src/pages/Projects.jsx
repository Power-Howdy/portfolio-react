import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import TestDomeCertificate from "../components/TestDomeCertificate";
import certificates from "../assets/certificates.json";
import cert1 from "../assets/cert/problem_solving_basic certificate.pdf";
import cert2 from "../assets/cert/javascript_basic certificate.pdf";
import cert3 from "../assets/cert/css certificate.pdf";
import Iframe from "react-iframe";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row>
          <h1 className="project-heading">
            <strong className="yellow">Certificates Earned</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few certificates I&apos;ve earned so far.
          </p>
        </Row>

        <Row>
          <Col md={4}>
            <Iframe title="cert1" src={cert1} width="100%" height={400} />
          </Col>
          <Col md={4}>
            <iframe
              id="myIframe"
              title="cert2"
              src={cert2}
              width="100%"
              height={400}
            />
          </Col>
          <Col md={4}>
            <iframe
              title="cert3"
              src={cert3}
              width="100%"
              height={400}
            ></iframe>
          </Col>
          {certificates.data.map((certificate) => (
            <Col
              key={
                "certificat-test-dom-" + certificates.data.indexOf(certificate)
              }
              md={3}
              className="project-card"
            >
              <TestDomeCertificate
                skill={certificate.skill}
                url={certificate.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
