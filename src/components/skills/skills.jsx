import "./skills.css"
import { BsPatchCheckFill } from "react-icons/bs";
import { Zoom } from "react-awesome-reveal";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
const Skills = () =>{
    return (
      <Zoom>
        <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Skills</h2>
        <div className="container experience__container">

        <div className="experience__frontend">
            <h3>Data Engineer</h3>
            <div className="experience__content">
              <article className="experience__details">
                <div>
                  <h4>Data extraction & data migration</h4>
                  <small className="text-light">Advance</small>
                </div>
              </article>
              <article className="experience__details">
               
                <div>
                  <h4>Docker</h4>
                  <small className="text-light">Advandced</small>
                </div>
              </article>
              <article className="experience__details">
               
                <div>
                  <h4>Data ingestion & etl elt Pipeline</h4>
                  <small className="text-light">Advandced</small>
                </div>
              </article>
             
             
              <article className="experience__details">
                <div>
                  <h4>Bash scripting</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <div>
                  <h4>Data analysis & modeling</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <div>
                  <h4>Airflow</h4>
                  <small className="text-light">Advance</small>
                </div>
              </article>


              <article className="experience__details">
                <div>
                  <h4>Sql and NoSQL databases</h4>
                  <small className="text-light">Advance</small>
                </div>
              </article>

              <article className="experience__details">
                <div>
                  <h4>• Big data technologies (e.g. spark)</h4>
                  <small className="text-light">Advance</small>
                </div>
              </article>

              <article className="experience__details">
                <div>
                  <h4>Data analysis & modeling</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <div>
                  <h4>Data warehousing & management (snowflake, Aws redshift)</h4>
                  <small className="text-light">Advance</small>
                </div>
              </article>

              <article className="experience__details">
                <div>
                  <h4>Apache Kafka</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <div>
                  <h4>Dbt</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <div>
                  <h4>Cloud computing platforms (e.g., AWS, Snowflake)</h4>
                  <small className="text-light">Advance</small>
                </div>
              </article>
             
            </div>
          </div>



          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
               
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Advance</small>
                </div>
              </article>
              <article className="experience__details">
               
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Advandced</small>
                </div>
              </article>
              <article className="experience__details">
                
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Advandced</small>
                </div>
              </article>
             
             
              <article className="experience__details">
                
                <div>
                  <h4>React</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
          
          <div className="experience__backend">

            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Advance</small>
                </div>
              </article>
              <article className="experience__details">
               
                <div>
                  <h4>Django</h4>
                  <small className="text-light">Advandced</small>
                </div>
              </article>
              <article className="experience__details">
               
                <div>
                  <h4>Api Developement</h4>
                  <small className="text-light">Advance</small>
                </div>
              </article>
              <article className="experience__details">
              
                <div>
                  <h4>Api Integrations</h4>
                  <small className="text-light">Advance</small>
                </div>
              </article>
              <article className="experience__details">
               
                <div>
                  <h4>Web Scrapping</h4>
                  <small className="text-light">Advance</small>
                </div>
              </article>
            </div>
            
          </div>
        </div>
      </section>
      </Zoom>
    )
}

export default Skills