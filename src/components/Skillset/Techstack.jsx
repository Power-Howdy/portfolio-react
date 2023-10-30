import Aos from "aos";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import {
  SiMaterialui,
  SiGraphql,
  SiSolidity,
  SiRedux,
  SiMongodb,
  SiHtml5,
} from "react-icons/si";

const Techstack = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiMaterialui />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiGit />
      </Col>
    </Row>
  );
};

export default Techstack;
