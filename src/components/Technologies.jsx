import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  FaBug,
  FaCode,
  FaCogs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaLaptopCode,
  FaNetworkWired,
  FaPuzzlePiece,
  FaPython,
  FaRobot,
  FaServer,
  FaTachometerAlt,
  FaVial,
} from "react-icons/fa";
import {
  SiJenkins,
  SiPostman,
  SiPytest,
  SiReadthedocs,
  SiSelenium,
  SiTestcafe,
  SiTestinglibrary,
} from "react-icons/si";

const Technologies = () => {
  const [tabs] = useState(["Qualification", "Skills", "Types of Testing"]);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [typesOfTesting] = useState([
    {
      label: "Manual Testing",
      icon: <FaBug size={80} title="Manual Testing" />,
    },
    {
      label: "Automation Testing",
      icon: <FaRobot size={80} title="Automation Testing" />,
    },
    {
      label: "Functional Testing",
      icon: <FaCogs size={80} title="Functional Testing" />,
    },
    {
      label: "Regression Testing",
      icon: <FaVial size={80} title="Regression Testing" />,
    },
    {
      label: "Performance Testing",
      icon: <FaTachometerAlt size={80} title="Performance Testing" />,
    },
    {
      label: "API Testing",
      icon: <FaLaptopCode size={80} title="API Testing" />,
    },
    {
      label: "Integration Testing",
      icon: <FaNetworkWired size={80} title="Integration Testing" />,
    },
    {
      label: "Sanity Testing",
      icon: <FaServer size={80} title="Sanity Testing" />,
    },
    {
      label: "Smoke Testing",
      icon: <FaPuzzlePiece size={80} title="Smoke Testing" />,
    },

    {
      label: "Ad-hoc Testing",
      icon: <FaBug size={80} title="Ad-hoc Testing" />,
    },
  ]);

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

  const techSkills = [
  { label: "Java", icon: <FaJava size={100} title="Java" /> },
  { label: "Python", icon: <FaPython size={100} title="Python" /> },
  { label: "Selenium WebDriver", icon: <SiSelenium size={100} title="Selenium WebDriver" /> },
  { label: "Pytest", icon: <SiPytest size={100} title="Pytest" /> },
  { label: "TestNG", icon: <SiTestcafe size={100} title="TestNG" /> },
  { label: "Postman", icon: <SiPostman size={100} title="Postman" /> },
  { label: "CI/CD (Jenkins)", icon: <SiJenkins size={100} title="CI/CD (Jenkins)" /> },
  { label: "Git", icon: <FaGitAlt size={100} title="Git" /> },
  { label: "GitHub", icon: <FaGithub size={100} title="GitHub" /> },
  { label: "Documentation", icon: <SiReadthedocs size={100} title="Documentation" /> },
];

  return (
    <section id="qualification">
      <Container>
        <div className="d-flex tabs-wrapper">
          {tabs.map((val, index) => (
            <div key={index} className="mt-5">
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
          {clickedIndex === 0 &&
            education.map((val, index) => (
              <Row key={index}>
                <Col
                  lg={1}
                  md={1}
                  sm={1}
                  xs={1}
                  className="position-relative mb-4"
                >
                  <span className="dot"></span>
                  <span className="line"></span>
                </Col>
                <Col lg={8} md={8} sm={8} xs={8}>
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
{clickedIndex === 1 && (
  <>
    {/* Skill List */}
    <ul className="d-flex justify-content-between flex-wrap">
      {techSkills.map((skill, index) => (
        <li key={index}>{skill.label}</li>
      ))}
    </ul>

    {/* Icon List */}
    <div className="icons">
      <ul className="list-unstyled d-flex justify-content-evenly flex-wrap my-5">
        {techSkills.map((skill, index) => (
          <li key={index}>{skill.icon}</li>
        ))}
      </ul>
    </div>
  </>
)}

       {clickedIndex === 2 && (
  <>
    {/* types of testing */}
   <ul className="d-flex flex-wrap justify-content-center gap-5">
  {typesOfTesting.map((skill, index) => (
    <li key={index}>{skill.label}</li>
  ))}
</ul>

    {/* Icon List */}
    <div className="icons">
      <ul className="list-unstyled d-flex justify-content-evenly flex-wrap my-5">
        {typesOfTesting.map((skill, index) => (
          <li key={index}>{skill.icon}</li>
        ))}
      </ul>
    </div>
  </>
)}

        </div>
      </Container>
    </section>
  );
};

export default Technologies;
