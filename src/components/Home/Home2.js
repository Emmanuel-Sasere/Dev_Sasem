import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="gold"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I've developed a deep passion for programming and believe I've made some substantial progress in my learning journey. 🤷‍♂️
              <br />
              <br />I possess proficiency in classical subjects, such as...
              <i>
                <b className="gold"> Html, Css, C, Javascript, Wordpress. </b>
              </i>
              <br />
              <br />
              
I'm particularly interested in creating innovative solutions in my field of interest &nbsp;
              <i>
                <b className="gold">Web technologies, products,</b> and related domains are within my scope of interest{" "}
                <b className="gold">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              When the occasion presents itself, I utilize my passion for creating products using technologies like <b className="gold">Node.js</b> and
              <i>
                <b className="gold">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="gold"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="gold">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Emmanuel-Sasere"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/EmmanuelSasere0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/emmanuelsasere/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dev_sasem/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
