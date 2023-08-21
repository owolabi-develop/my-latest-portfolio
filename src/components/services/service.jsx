import "./services.css"
import { BiCheck } from "react-icons/bi";
import { Zoom } from "react-awesome-reveal";
const Services =()=>{
    return (
      <Zoom>
        <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Api Development/Integrations</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Django rest-framework</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Api testing</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Integrations</p>
              </li>
             
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Python scripting</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Fulstack Django application</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Hosting</p>
              </li>
            
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Web Scraping Automation</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Python Beautifull soup</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Automation and testing</p>
              </li>
             
            </ul>
          </article>
        </div>
      </section>
      </Zoom>
    )
}
export default Services