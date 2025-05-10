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
               I'm a passionate fresher with a solid foundation
              in HTML5, CSS3, JavaScript and React. This knowledge forms the
              cornerstone of my journey into web development. Eager to delve
              into modern frameworks like React.js, I'm keen on mastering the
              tools that drive today's dynamic web applications. My goal is to
              create not just functional but also aesthetically pleasing
              websites that users love to interact with. I'm dedicated to
              staying updated with the latest web technologies, ensuring that I
              remain at the forefront of this ever-evolving field. With a
              proactive approach to learning, I embrace challenges as
              opportunities to grow and refine my skills. My ultimate aim is to
              contribute meaningfully to the digital world by building
              innovative and user-centric web solutions.
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
