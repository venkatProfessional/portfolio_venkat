import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Internship from "./Internship";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const Technologies = () => {
  const [tabs] = useState(["Qualification","skills"]);
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleIndexClick = (index) => {
    setClickedIndex(index);
  };

  const education = [
    {
      course: "BE IN ECE",
      instituteName: "Sethu Institute of Technology",
      year: "2019-2023",
      CGPA: "8.3 CGPA",
    },
    {
      course: "HSS",
      instituteName: "SethuRajan Padma Higher Secondary School",
      year: "2018-2019",
      CGPA: "60%",
    },
    {
      course: "Matriculation",
      instituteName: "St. John Peter Matriculation School",
      year: "2016-2017",
      CGPA: "83.6%",
    },
  ];



  return (
<section id="qualification">

<Container>
      <div className="d-flex tabs-wrapper ">
        {tabs.map((val, index) => (
          <div key={index} className=" mt-5">
            <button
              className="btn mx-5"
              onClick={() => handleIndexClick(index)}
              style={{
                borderBottom:
                  clickedIndex === index ? "1px solid #B336FF" : "none",
                color: clickedIndex === index ? "#B336FF" : "#fff",
              }}
            >
              {val}
            </button>
          </div>
        ))}
      </div>

      <div className="py-5">
        {clickedIndex === 0 && education.map((val, index) => (
        <Row>
           
          <Col lg={1} md={1} sm={1} xs={1}  key={index} className="position-relative mb-4">
          
          <span className="dot"></span>
          <span className="line"></span>
          </Col>
              <Col lg={8} md={8} sm={8} xs={8} >
            <div className="trajectory_content">
                <h1>{val.course}</h1>
                <p>{val.instituteName}</p>
                <p>{val.CGPA}</p>
          </div>
              </Col>
              <Col lg={3} md={8} sm={3} xs={3}> 
                <p>{val.year}</p>
              </Col>
           
        </Row>
        ))}
        {clickedIndex === 1 &&(
            <>
     
        
           <ul className=" d-flex justify-content-between">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>BOOTSTARP</li>
                <li>MATERIAL UI</li>
                <li>REACT</li>
            </ul>
     
      <div className=" icons">
        
      <ul  className=" list-unstyled d-flex justify-content-evenly my-5">
             <li> <FaHtml5/></li>
           <li> <FaCss3/></li>
            <li> <IoLogoJavascript/></li>
             <li> <FaReact/></li>
            </ul>
           
      </div>

      
            
            </>
        )
        
        }
      </div>
    </Container>
</section>
  );
};

export default Technologies;
