import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

function About() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rsz4p62",
      "template_kf8z3kc",
      form.current,
      "KQZ1FUigy-wCZY0js"
    );

    e.target.reset();
  };

  return (
    <div>
      <section id="contact">
        <h5 style={{color:'white'}}>Get In Touch</h5>
        <h2 style={{color:'white'}}>Contact Me!</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>ohad909881122@gmail.com</h5>
              <a
                href="mailto:ohad909881122@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send a Message
              </a>
            </article>

            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>OhadCohen</h5>
              <a
                href="https://m.me/100000848391807"
                target="_blank"
                rel="noreferrer"
              >
                Send a Massage
              </a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>050-909-8812</h5>
              <a
                href="https://api.whatsapp.com/send?phone=0509098812"
                target="_blank"
                rel="noreferrer"
              >
                Send a Massage
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <textarea
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            ></textarea>
            <textarea
              type="email"
              name="email"
              placeholder="Your Email"
              required
            ></textarea>
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default About;
