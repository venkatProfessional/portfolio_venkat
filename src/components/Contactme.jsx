import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useForm } from "react-hook-form";

const Contactme = () => {
    const{register,handlesubmit,formState:{errors}}=useForm();
  return (
    <div>
         <section id="contact">
      <Container>
        <h1 className=" d-flex justify-content-center heading_color" >Contact me</h1>
        <p className=" text-center">Just Write a Message</p>

        <Row>
          <Col lg={4}>
            <h5>Contact information</h5>
            <p>say something to start a conversation</p>
            <div className=" d-flex gap-3 pt-5">
              <BsFillTelephoneFill />
              <p>+91 8189886469</p>
            </div>

            <div className=" d-flex gap-3">
              <MdEmail />
            <p style={{textTransform:"none"}} className="normal-case">erjothivenkat2002@gmail.com</p>
            </div>
            <div className=" d-flex gap-3">
              <IoLocation />
              <p>Madurai</p>
            </div>

            <div className=" d-flex  mt-5 opacity-25"> 
            &copy; 2024  Venkat Portfolio 

            </div>
          </Col>

          <Col lg={8} className="  mb-4 pb-4 mt-2 d-flex flex-column  justify-content-evenly">
          <label htmlFor="name" className=" bg-white text-black mt-3"></label>
             <input type="text" name="name" placeholder="name" className=" w-100 mt-3" />
          <label htmlFor="email" className=" bg-white text-black mt-3"></label>
             <input type="text" name="name" placeholder="Email" className=" w-100 mt-3" />
          <label htmlFor="message" className=" bg-white text-black mt-3"></label>
             <input type="text" name="message" placeholder="message" className=" w-100 mt-3" />
             <div className=" d-flex justify-content-end mt-4 contact-btn">
             <Button type="submit">Submit</Button>

             </div>
          </Col>
        </Row>
      </Container>
      </section>
    </div>
  );
};

export default Contactme;
