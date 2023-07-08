import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import TestDomeCertificate from "../components/TestDomeCertificate";
import { nanoid } from "nanoid";
import axios from "axios";
import { MDBSpinner } from 'mdb-react-ui-kit';
import certificates from "../assets/certificates.json";

const Projects = () => {
  // const [certificates, setCertificates] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   axios.get('/certificates.json')
  //   .then(res => {
  //     setCertificates(res.data.data);
  //     setLoading(false);
  //   })
  // }, [])
  return (
    <Container fluid className="project-section">
    <Particle />
      {/* {loading && <MDBSpinner role='status'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      } */}
      {/* {!loading &&  */}
      <Container>
          <h1 className="project-heading">
            <strong className="yellow">Certificates Earned</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few certificates I've earned so far.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          { certificates.data.map((certificate) => <Col key={nanoid()} md={3} className="project-card">
            <TestDomeCertificate key={nanoid()} skill={certificate.skill} url={certificate.url}/>
            </Col>)}
          </Row>
        </Container>
      {/* } */}
    </Container>
  )
}

export default Projects