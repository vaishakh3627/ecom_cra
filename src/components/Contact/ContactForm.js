import React from "react";
import { useState } from "react";

import ContactImage from "../../assets/imgs/page/contact-2.png";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });

  const handleName = (e) => {
    setContactForm({ ...contactForm, name: e.target.value });
  };
  const handleEmail = (e) => {
    setContactForm({ ...contactForm, email: e.target.value });
  };
  const handleTelephone = (e) => {
    setContactForm({ ...contactForm, telephone: e.target.value });
  };
  const handleSubject = (e) => {
    setContactForm({ ...contactForm, subject: e.target.value });
  };
  const handleMessage = (e) => {
    setContactForm({ ...contactForm, message: e.target.value });
  };

  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log(contactForm);
    setContactForm({name: "", email: "", telephone: "", subject: "", message: ""})
  };

  return (
    <div className="row">
      <div className="col-xl-8">
        <div className="contact-from-area padding-20-row-col">
          <h5 className="text-brand mb-10">Contact form</h5>
          <h2 className="mb-10">Drop Us a Line</h2>
          <p className="text-muted mb-30 font-sm">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form
            className="contact-form-style mt-30"
            id="contact-form"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input
                    name="name"
                    onChange={handleName}
                    placeholder="First Name"
                    type="text"
                    value={contactForm.name}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input
                    name="email"
                    onChange={handleEmail}
                    placeholder="Your Email"
                    type="email"
                    value={contactForm.email}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input
                    name="telephone"
                    onChange={handleTelephone}
                    placeholder="Your Phone"
                    type="number"
                    value={contactForm.telephone}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input
                    name="subject"
                    onChange={handleSubject}
                    placeholder="Subject"
                    type="text"
                    value={contactForm.subject}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="textarea-style mb-30">
                  <textarea
                    name="message"
                    onChange={handleMessage}
                    placeholder="Message"
                    value={contactForm.message}
                  ></textarea>
                </div>
                <button className="submit submit-auto-width" type="submit">
                  Send message
                </button>
              </div>
            </div>
          </form>
          <p className="form-messege"></p>
        </div>
      </div>
      <div className="col-lg-4 pl-50 d-lg-block d-none">
        <img className="border-radius-15 mt-50" src={ContactImage} alt="" />
      </div>
    </div>
  );
};
export default ContactForm;