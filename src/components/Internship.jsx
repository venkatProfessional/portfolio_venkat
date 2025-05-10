import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Internship = () => {
  const internship = [
    {
      imgUrl: "/public/assets/certificate-images/intern-senchola.png",
      title: "Intern Senchola",
      description: "Description for Intern Senchola",
    },
    {
      imgUrl: "/public/assets/certificate-images/sai-experience.png",
      title: "Sai Experience",
      description: "Description for Sai Experience",
    },
    {
      imgUrl: "/public/assets/certificate-images/udemy-css.jpg",
      title: "Udemy CSS",
      description: "Description for Udemy CSS",
    },
  ];

  return (
    <section id="experience">
      <div>
        <h1 className=" text-center "> Experience</h1>
        <Container className=" py-5">
          <Row className=" justify-content-between  ">
            <Col lg={8}>
            <h1>Intern at sai </h1>
              <p>
                During my internship, I had the opportunity to work with a
                talented team at Sai Technologies, where I gained hands-on
                experience in FrontendDevelopment. I was involved
                in a project called Cohortz, which helped me develop my
                skills in  web development. This experience not only enhanced my technical
                abilities but also improved my collaboration and communication
                skills.
              </p>
              <p>
                One of the highlights was [mention a significant achievement or
                learning moment], which taught me the importance of [mention a
                key lesson learned]. Overall, this internship was a pivotal step
                in my professional journey, providing me with valuable insights
                and a deeper understanding of [industry or field].
              </p>
            
              <h1>Intern at senchola tech  solutions</h1>

              
              <p>
                During my internship, I had the opportunity to work with a
                talented team at [Company Name], where I gained hands-on
                experience in [specific skills or technologies]. I was involved
                in [describe projects or tasks], which helped me develop my
                skills in [mention relevant skills, e.g., web development, data
                analysis, etc.]. This experience not only enhanced my technical
                abilities but also improved my collaboration and communication
                skills.
              </p>
              <p>
                One of the highlights was [mention a significant achievement or
                learning moment], which taught me the importance of [mention a
                key lesson learned]. Overall, this internship was a pivotal step
                in my professional journey, providing me with valuable insights
                and a deeper understanding of [industry or field].
              </p>
            </Col>

            <Col lg={4}>
              <Carousel>
                {internship.map((item, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={item.imgUrl}
                      alt="img"
                      className=" img-fluid  min-vh-100   p-5"
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
