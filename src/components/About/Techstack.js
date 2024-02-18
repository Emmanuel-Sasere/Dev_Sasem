import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiBootstrap,
  DiCss3Full,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
  DiWordpress,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiTailwindcss } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3Full />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
    </Row>
  );
};

export default Techstack;
