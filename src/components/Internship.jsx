import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Internship = () => {
  const internship = [
    {
    imgUrl: "/assets/certificate-images/intern-senchola.png",
      title: "Internship Trainee, Smiligence (Mar 2025 – July 2025)",
      description: `
Projects: Human Resource Management Portal
• Worked on the HRM portal focused on modules like employee check-in/check-out, attendance tracking, and leave management.
• Gained practical experience in both manual and automation testing, contributing to overall product stability and quality.
• Participated in manual testing, verified functionality, and validated to support QA efforts.
• Collaborated with business analysts and QA teams to identify, track, and resolve defects during development and UAT phases.
• Developed and executed basic automation scripts using Selenium WebDriver to streamline repetitive test scenarios, improve regression test coverage, and reduce manual effort.
• Actively participated in daily stand-up meetings and sprint reviews to align on bug fixes, testing outcomes, and deployment readiness.
      `
    },
  ];

  return (
    <section id="experience" className="fs-10">
      <div>
        <h1 className="text-center heading_color">Experience</h1>
        <Container className="py-1">
          <Row className="justify-content-between">
            <Col lg={8}>
              {internship.map((item, index) => {
                // Split "Projects: ..." and make "Projects" bold
                const descriptionLines = item.description.trim().split("\n");
                const modifiedLines = descriptionLines.map((line, i) => {
                  if (line.startsWith("Projects:")) {
                    return (
                      <p key={i}>
                        <strong>{line.split(":")[0]}:</strong>
                        {line.split(":")[1]}
                      </p>
                    );
                  }
                  return <p key={i}>{line}</p>;
                });

                return (
                  <div key={index} className="mb-5">
                    <h3>{item.title}</h3>
                    {modifiedLines}
                  </div>
                );
              })}
            </Col>

            <Col lg={4}>
              <Carousel>
                {internship.map((item, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="img-fluid p-4"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Internship;
