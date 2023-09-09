import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./contact.css";

const Contact = () => {

  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("portfolio-form");
    var button = document.getElementById("submit-button");
    var status = document.getElementById("submition-status");
  
    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.classList.add("success");
      button.style = "display: none ";
      status.innerHTML = "Thank You!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }


  return (
    <>
      <sectoin id="contact">
      <Container>
        <div class="section-title mt-5 mx-auto text-center position-relative" data-aos="fade-up">
            <span class="text-uppercase position-absolute">contact</span>
            <h2 class="text-uppercase position-relative mb-0">contact</h2>
            <small class="mini-title font-weight-bolder">
                <small class="p-before text-dark">&mdash;&mdash;&mdash;</small> Get in touch <small
                    class="p-after text-dark">&mdash;&mdash;&mdash;</small>
            </small>
        </div>
      <div className="row py-2 d-flex">
            <div className="col-md-6 mb-3 order-2 order-md-1" data-aos="zoom-in">
                <h3 className="text-center py-3">Google Map</h3>
                <iframe className="mb-4 mb-lg-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7261.089989371098!2d89.14109217317713!3d24.501217349655175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc3f6c5fa58727%3A0xff838a3072486e1a!2sSingra!5e0!3m2!1sen!2sbd!4v1605878250587!5m2!1sen!2sbd"
                    frameborder="0" style={{border:"0", width: "100%", height: "384px"}} allowfullscreen></iframe>
            </div>
            <div className="col-md-6 order-1 order-md-2" data-aos="fade-up">
                <h3 className="text-center py-3">Message Me</h3>
                <form action="https://formspree.io/f/xnqogqyo" method="POST" name="web-portfolio-contact-form" id="portfolio-form">
                    <Row className="form-row mb-3">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input type="text" name="Firstname" className="form-control" id="firstname" required
                                    placeholder="Enter firstname" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input type="text" name="Lastname" className="form-control" id="lastname" required
                                    placeholder="Enter lastname" />
                            </div>
                        </div>
                    </Row>
                    <Row className="form-row mb-3">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input type="email" name="Email" className="form-control" id="email" required
                                    placeholder="Enter email" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input type="tel" name="Phone" className="form-control" id="phone"
                                    placeholder="Enter phone" />
                            </div>
                        </div>
                    </Row>
                    <div className="form-group w-100 mb-3">
                        <input type="text" className="form-control" name="subject" id="subject"
                            placeholder="Subject" />
                    </div>
                    <div className="form-group mb-3">
                        <textarea name="Message" id="message" style={{height: "100px"}} className="form-control " cols="30" required minlength="20"
                            rows="10" placeholder="Write Your message"></textarea>
                    </div>

                    <div className="form-group text-center mt-5">
                        <input type="submit" value="Send" id="submit-button"
                            className="btn btn-outline-danger font-weight-bold px-5 rounded-0" />
                    </div>
                </form>
                <div className="" id="submition-status"></div>
            </div>
        </div>
      </Container>
      </sectoin>
    </>
  );
};

export default Contact;