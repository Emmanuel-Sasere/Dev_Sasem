import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGithubBadge, DiLinux, DiWindows } from "react-icons/di";
import {
  SiFigma,
  SiNetlify,
  SiSlack,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
    </Row>
  );
};

export default Toolstack;
