import "./about.css"
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import owolabi from "../../assets/images/owolabi.png"

const AboutME = ()=>{

    return (
        <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={owolabi} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>5+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>150+ WorldWide</small>
              </article>
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Projects</h5>
                <small>60+ Completed Projects</small>
              </article>
            </div>
            <p>
            I am a skilled Full Stack Python Web Developer, Data Engineer, and Generative AI Developer with 5
             years of experience delivering innovative, scalable, and high-quality solutions.
             I specialize in leveraging cutting-edge technologies to solve complex problems and drive business growth.
            </p>
            <a href="#contact" className="btn btn-primary">
              Lets Talk
            </a>
          </div>
        </div>
      </section>
    )
}

export default AboutME