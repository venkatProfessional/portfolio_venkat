import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useForm } from "react-hook-form";

const Contactme = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("https://formspree.io/f/your_form_id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div>
      <section id="contact">
        <Container>
          <h1 className=" d-flex justify-content-center heading_color">Contact me</h1>
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
                <p style={{ textTransform: "none" }} className="normal-case">erjothivenkat2002@gmail.com</p>
              </div>
              <div className=" d-flex gap-3">
                <IoLocation />
                <p>Madurai</p>
              </div>

              <div className=" d-flex mt-5 opacity-25">
                &copy; 2024 Venkat Portfolio
              </div>
            </Col>

            <Col lg={8} className="mb-4 pb-4 mt-2 d-flex flex-column justify-content-evenly">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="w-100 mt-3"
                />
                {errors.name && <span className="text-danger">Name is required</span>}

                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="w-100 mt-3"
                />
                {errors.email && <span className="text-danger">Email is required</span>}

                <textarea
                  placeholder="Message"
                  {...register("message", { required: true })}
                  className="w-100 mt-3"
                  rows="4"
                />
                {errors.message && <span className="text-danger">Message is required</span>}

                <div className="d-flex justify-content-end mt-4 contact-btn">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contactme;
