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
                <small>6+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>200+ WorldWide</small>
              </article>
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Projects</h5>
                <small>60+ Completed Projects</small>
              </article>
            </div>
            <p>
            I am a highly skilled and experienced Full Stack Python Web Developer and Data Engineer with 6 years of experience and a track record of delivering successful projects and maintaining high-quality standards. I am passionate about solving complex problems and leveraging technology to drive business growth.

Full Stack Development: Proficient in Python and web frameworks like Django and django-restframework Skilled in creating high-performance, secure, and scalable web applications.

Data Engineering: Expertise in designing and managing data pipelines, ETL processes, and data warehousing. Ensuring data quality and governance are top priorities.

API Integration: Experienced in developing and integrating APIs for seamless data exchange between systems. Proficient with third-party API integration.

Database Management: Strong database management skills encompassing SQL and NoSQL databases.

Cloud and Containerization: Familiarity with cloud platforms (AWS,snowfkake) and containerization technologies (Docker).

Problem-Solving: Exceptional problem-solving and analytical abilities to tackle complex technical issues and optimize system performance.

Documentation and Mentorship: Skilled in creating technical documentation and sharing knowledge through mentorship and training sessions.

Notable Projects and Accomplishments:

Successfully contribute the development of [Context data ETL Django Application] which resulted in [allowing user to enter their credential e.g. target and source to move from one destination to the other seamlessly using Apache Airflow for orchestration engine ].

Designed and implemented a robust data pipeline that streamlined data processing, resulting in 

If you're looking for a professional who can bring technical excellence and innovation to your team, I would be thrilled to discuss how I can contribute to your organization's success.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    )
}

export default AboutME