import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import avatar from "../../Assets/avatar.png";
import Aboutcard from "./AboutCard";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

const About = () => {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              From Passion to Profession:
              <strong className="gold"> My Story </strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={avatar} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="gold"> Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Tools in My
          <strong className="gold"> Toolbox</strong>
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
};

export default About;
