import "./projects.css"
import bloApi from '../../assets/images/blogApi.jpg'
import ecommarceApi from '../../assets/images/ecommarceApi.jpg'
import jobapi from '../../assets/images/jobapi.jpg'
import { Zoom } from "react-awesome-reveal";
const data = [
    {
      id: 1,
      image: bloApi,
      title: "Advance blog Api build with Django rest-framework",
      github: "https://github.com/owolabi-develop/blog-api",
      demo: "https://inext.dev"
    },
    {
      id: 2,
      image: ecommarceApi,
      title: "Advance E-commarce Api build with Django rest-framework",
      github: "https://github.com/owolabi-develop/ecommarce-api",
      demo: "https://inext.dev"
    },
    {
      id: 3,
      image: jobapi,
      title: "Advance Job porter Api build with Django rest-framework",
      github: "https://github.com/owolabi-develop/linkedIn-similar-api",
      demo: "https://inext.dev"
    },
    {
      id: 4,
      image: null,
      title: "Crypto Currency Dashboard & Financial Visualization",
      github: "https://github.com/inextdeve",
      demo: "https://inext.dev"
    },
    {
      id: 5,
      image: null,
      title: "Crypto Currency Dashboard & Financial Visualization",
      github: "https://github.com/inextdeve",
      demo: "https://inext.dev"
    },
  ];

const Portfolio = ()=>{

    return (
        <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <Zoom delay={100} >
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        </Zoom>
      </section>
    )
    

}

export default Portfolio