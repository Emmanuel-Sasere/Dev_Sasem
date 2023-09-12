import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImage from "../../Assets/Sasem img.png";

// import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// import Style from "C:\Users\emman\OneDrive\Documents\Dev_Sasem\src\style.css"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 5 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> EMMANUEL SASERE</strong>
              </h1>
              <div>
                <Type />
              </div>
              <div  className="main-page" >
              <p >with a passion for crafting digital solutions. I specialize in turning ideas into elegant and efficient software, bringing innovation to life one line of code at a time. Welcome to my world of coding creativity.</p>
              </div>
              
              <Row>
          <Col md={11} className="home-about-social">
           
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
            </Col>

            <Col  md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeImage}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "100%" }}
                
              />
            </Col>
          </Row>

        </Container>
      </Container>
     

    </section>
  );
}

export default Home;
