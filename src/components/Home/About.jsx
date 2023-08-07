import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" data-aos="fade-up">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Edmond Vitel</span>{" "}
              and I'm from{" "}
              <span className="yellow"> Rosny-sur-Seine, France.</span>
              <br />
              <br />
              I graduated with a Bachelor's degree in Computer Science and
              Engineering in 2017.
              <br />
              <br />
              As a<b className="yellow"> Full-Stack </b>developer, I enjoy
              tackling new challenges and continuously expanding my skillset.
              <br />
              <br />I am proficient in
              <b className="yellow"> Javascript & PHP.</b>
              <br />
              <br />
              I have a lot of experience with MERN Stack, Next.js, Django and
              PHP Laravel and CodeIgniter, Symfony frameworks.
              <br />
              <br />I have a passion for working with{" "}
              <b className="yellow">Node.js, MongoDB,</b> and
              <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js, Angular.js</b>
              </i>
              <br />
              <br />I am also interested in building new
              <i>
                <b className="yellow"> Web Technologies and Products, </b>
                as well as exploring areas related to
                <b className="yellow"> Artificial Intelligence.</b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar" data-aos="fade-up">
            <Tilt>
              <img
                src={LaptopImg}
                className="img-fluid"
                alt="avatar"
                data-aos="fade-down"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
