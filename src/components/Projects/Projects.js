import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BSH from "../../Assets/Projects/BSH.png";
import SST from "../../Assets/Projects/SST.png";
import piggyvest from "../../Assets/Projects/piggyvest.png";
import sneaker from "../../Assets/Projects/sneaker.png";
import tech from "../../Assets/Projects/tech.png";
import webmax from "../../Assets/Projects/webmax.png";
import ProjectCard from "./ProjectCards";

const Projects = () => {
  return (
    <Container fluid className="project-section" id="projects">
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
              imgPath={BSH}
              isBlog={false}
              title="Bond Synergy Holdings"
              description="Welcome to BondSynergy Holding, where digital transformation meets innovation. Our team collaborates with you to build websites and launch your business digitally, ensuring your online presence is both impactful and successful. Whether you're a startup or an established business, BondSynergy Holding empowers you to reach your digital goals. Experience the future of digital solutions with BondSynergy Holding"
              ghLink="https://github.com/Emmanuel-Sasere/"
              demoLink="https://bondsynergyholdings.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SST}
              isBlog={false}
              title="Study Stern"
              description="Welcome to Study Stern, an education startup redefining learning experiences. Our team works tirelessly to develop innovative solutions that enhance education and empower learners. From building waitlists to launching groundbreaking initiatives, Study Stern is committed to revolutionizing the education landscape. Join us in shaping the future of learning with Study Stern."
              ghLink="https://github.com/Emmanuel-Sasere/"
              demoLink="https://studystern.com"
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
};

export default Projects;
