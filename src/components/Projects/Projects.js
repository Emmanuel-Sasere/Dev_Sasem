import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import tech from "../../Assets/Projects/tech.png";
import piggyvest from "../../Assets/Projects/piggyvest.png";
import sneaker from "../../Assets/Projects/sneaker.png";
import veezedit from "../../Assets/Projects/veezedit.png";
import wealthsea from "../../Assets/Projects/wealthsea.png";
import webmax from "../../Assets/Projects/webmax.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="gold">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={veezedit}
              isBlog={false}
              title="VEEZEDIT"
              description="Welcome to VeezEdit, where imagination meets innovation. Our platform combines the power of Photopea's API with the versatility of JavaScript to provide you with a seamless online image editing experience. Whether you're a professional designer or a creative enthusiast, VeezEdit empowers you to bring your visions to life. Explore the world of graphics design like never before with VeezEdit"
              ghLink="https://github.com/Emmanuel-Sasere/VEEZEDIT"
              demoLink="https://veezedit.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wealthsea}
              isBlog={false}
              title="Wealth Sea"
              description="Welcome to the WealthSea Dashboard, your compass in the world of finance. This intuitive tool provides a clear view of your wealth and investments, empowering you with real-time insights for smarter financial decisions. Explore your financial horizon with ease, courtesy of WealthSea"
              ghLink="https://github.com/Emmanuel-Sasere/WealthSea-Investment-App"
              demoLink="https://wealthsea.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tech}
              isBlog={false}
              title="Simple-Tech-Service-Webpage"
              description="Welcome to TechMax Solutions, your gateway to cutting-edge technology services. Our website is a testament to our commitment to delivering top-tier tech solutions. Explore our range of services, from web development and digital marketing to IT consulting. At TechMax, we're here to empower your digital world"
              ghLink="https://github.com/Emmanuel-Sasere/Simple-Tech-Service-Webpage"
              demoLink="https://tech-service-webpage.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webmax}
              isBlog={false}
              title="Webmax-calculator"
              description="Experience the convenience of the WebMax Calculator, a sleek and efficient tool built with JavaScript, HTML, and CSS. Perform calculations effortlessly with a user-friendly interface designed for quick and accurate results. Simplify your math tasks with WebMax, your trusted calculation companion."
              ghLink="https://github.com/Emmanuel-Sasere/Calculator-Page"
              demoLink="https://webmax-calculator.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sneaker}
              isBlog={false}
              title="Sneaker-Website"
              description="Welcome to SneakHub, where sneaker enthusiasts discover the latest releases and trends. Explore a collection inspired by Nike's iconic designs and elevate your sneaker game today.
              "
              ghLink="https://github.com/Emmanuel-Sasere/Responsive-Sneaker-Project---By-Dev-sasem-"
              demoLink="https://responsive-sneaker-website-project.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={piggyvest}
              isBlog={false}
              title="Piggyvest-Clone"
              description="Explore our PiggyVest landing page clone—a faithful recreation of the renowned financial management platform. Experience secure savings, investment opportunities, and user-friendly design in this faithful replica. Discover the power of smart finance with our clone."
              ghLink="https://github.com/Emmanuel-Sasere/Piggyvest-Clone"
              demoLink="https://dev-sasem-piggyvest-clone.netlify.app" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
