import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const Contactme = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = async (data) => {
  try {
    const response = await fetch("https://formspree.io/f/xbjnqjap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Thank you! We’ll get back to you soon.",
        customClass: {
          popup: 'swal2-success-toast',
          title: 'swal2-white-text'
        },
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } else {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Failed to send message. Please try again.",
        customClass: {
          popup: 'swal2-error-toast',
          title: 'swal2-white-text'
        },
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  } catch (error) {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      title: "An error occurred. Please try again.",
      customClass: {
        popup: 'swal2-error-toast',
        title: 'swal2-white-text'
      },
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
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
