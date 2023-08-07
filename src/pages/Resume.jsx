import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import pdf from "../assets/resume.pdf";
const Resume = () => {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
          <iframe src={pdf} title="Resume" width={"100%"} height="2200px" id="ResumeFrame"/>
      </Container>
    </div>
  );
};

export default Resume;
