import "./contact.css"

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { Zoom } from "react-awesome-reveal";

const Contact = ()=>{

    return (
      <Zoom>
        <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <div className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>owolabidevelop84@gmail.com</h5>
              <h5>owolabiakintan33@gmail.com</h5>
              <a href="mailto:owolabidevelop84@gmail.com">Send a message</a>
            </div>

            <div className="contact__option">
              <RiWhatsappLine className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+2348120385367</h5>
              <a href="https://api.whatsapp.com/send?phone=08120385367">
                Send a message
              </a>
            </div>
          </div>
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
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
      </Zoom>

    )
}
export default Contact