import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="gold">Emmanuel Sasere </span>
            from <span className="gold"> Nigeria. </span>
            <br /> I am a final year student pursuing an Integrated MSc (IMSc)
            in Maths and Computing at kings.
            <br />
            Additionally, I am currently employed as a software developer at
            Ekobits.
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
