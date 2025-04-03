import "./services.css"
import { BiCheck } from "react-icons/bi";
const Services =()=>{
    return (
    
        <section id="services">
        <h2>My Services</h2>
        <div className="container services__container">


        <article className="service">
            <div className="service__head">
              <h3>AI application development</h3>
            </div>
            <ul className="service__list">
  

              <li>
                <BiCheck className="service__list-icon" />
                <p>RAG (Retrieval-Augmented Generation) Systems</p>
              </li>

              
              <li>
                <BiCheck className="service__list-icon" />
                <p>Embedding-Powered Search and Recommendations</p>
              </li>


              
              <li>
                <BiCheck className="service__list-icon" />
                <p>Data Preparation and Integration</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Prompt Engineering & Optimization</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p> Generative AI Integrations</p>
              </li>

             
            </ul>
          </article>

          
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
                <p>FastApi</p>
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
                <p>Fullstack Django application</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Hosting</p>
              </li>
            
            </ul>
          </article>
         
        </div>
      </section>

    )
}
export default Services