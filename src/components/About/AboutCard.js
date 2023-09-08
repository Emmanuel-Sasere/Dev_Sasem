import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              Hello, I'm <span className="gold" >Emmanuel Sasere</span>, a seasoned developer with expertise in <span className="gold" >HTML</span>, <span className="gold" >CSS</span>, <span className="gold" >JavaScript</span>, and related frameworks, including <span className="gold" >React.Js</span>, <span className="gold" >Next.Js</span>, <span className="gold" >Node.Js</span>, and <span className="gold" >WordPress</span>. I have a passion for crafting engaging and efficient web solutions that bring ideas to life.
              <br/>
              <br/>
                <strong className="sub_tit">My Journey</strong>: I embarked on this exciting journey in the world of web development, driven by a deep curiosity and a desire to create meaningful digital experiences. Over the years, I've honed my skills in front-end and back-end technologies, allowing me to build dynamic and user-friendly websites and applications.
              <br />
              <br />
              <strong className="sub_tit">What Drives Me</strong>: I'm fueled by the ever-evolving nature of technology and the endless possibilities it offers. Each project is an opportunity to innovate, solve problems, and deliver exceptional user experiences.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            
              <ImPointRight /> Driving
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditating
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dev Sasem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
