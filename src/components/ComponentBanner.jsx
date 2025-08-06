import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import bwImage from "../../public/assets/bwimage.jpg";
import lightBulb from "../../public/assets/light bulb.png";

const ComponentBanner = () => {
  const [showimg, setShowimg] = useState(false);

  const handleChangelightmode = () => {
    setShowimg(!showimg);
    console.log(showimg);
  };

  return (
    <>
      <Container className="Banner_wrapper">
        <Row className="justify-content-center align-items-center">
          <Col lg={6} md={6} sm={12} xs={12}>
            <Row className="align-items-start justify-content-center">
              <Col
                lg={7}
                md={4}
                sm={12}
                xs={12}
                className="mb-3 mb-md-0 order-2 order-md-1"
              >
                <img
                  src={bwImage}
                  alt="Black and white representation"
                  className="img-fluid bw-image"
                />
              </Col>
              <Col
                lg={4}
                md={4}
                sm={12}
                xs={12}
                className=" order-1 order-md-2 d-flex justify-content-center"
              >
                <img
                  src={lightBulb}
                  alt="Light bulb"
                  className="img-fluid"
                  onClick={handleChangelightmode}
                />
              </Col>
            </Row>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            className="d-flex justify-content-center flex-column"
          >
            <p className="name-text ">
              I AM <span className="color-violet">JOTHI VENKAT</span>
            </p>
            <p>
              I'm a passionate fresher with a strong foundation in software
              testing, familiar with both manual and automated testing
              practices. My experience includes working with testing tools such
              as Selenium and Postman, and I am proficient in writing and
              maintaining test cases, debugging, and reporting defects. My goal
              is to ensure the delivery of high-quality software products by
              identifying and addressing issues early in the development
              process. With a commitment to continuous learning, I stay updated
              on testing methodologies and strive to contribute to robust and
              user-focused digital solutions. I view every challenge as a
              valuable opportunity to improve my analytical and technical skills
              and am dedicated to playing a proactive role in any software
              quality assurance team.
            </p>
            {/* <div className=" d-flex justify-content-end gap-2">
               <p>resume</p>
               <p>resume</p>
               <p>resume</p>
               <p>resume</p>
               <p>resume</p>
             </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ComponentBanner;
