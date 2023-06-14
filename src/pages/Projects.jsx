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
    .then(res => res.json())
    .then(response => {
      console.log(response.data);
      setCertificates(response.data);
    })
  }, [])
  // const certificates = [
  //     {
  //       skill: "Web Developer",
  //       url: "https://www.testdome.com/certificates/1688bf88509143ae81f2ddd399fb3dd1"
  //     },
  //     {
  //       skill: "HTML/CSS",
  //       url: "https://www.testdome.com/certificates/cf2a2eb0a5c841d7aa20ef77f9e4ddce"
  //     },
  //     {
  //       skill: "Javascript",
  //       url: "https://www.testdome.com/certificates/22ddae8543584dc5be08bb3a351dc5a3"
  //     },
  //     {
  //       skill: "React",
  //       url: "https://www.testdome.com/certificates/828bd8656a104c8184596b0840d47fe2"
  //     },
  //     {
  //       skill: "SQL",
  //       url: "https://www.testdome.com/certificates/6cfdd8d058364e7cab8bba18db616d53"
  //     },
  //     {
  //       skill: "PHP",
  //       url: "https://www.testdome.com/certificates/df04f07712c544cfbe0761354767b4f9"
  //     },
  //     {
  //       skill: "Laravel",
  //       url: "https://www.testdome.com/certificates/89958131aaa34348969c7b2b92fc6e7b"
  //     },
  //     {
  //       skill: "Node.js",
  //       url: "https://www.testdome.com/certificates/d626b51f96384269805a34f564bb74e8"
  //     },
  //     {
  //       skill: "Express.js",
  //       url: "https://www.testdome.com/certificates/9b100ae89da54d3db17e4e3ad03f8b87"
  //     },
      
  //   ];
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