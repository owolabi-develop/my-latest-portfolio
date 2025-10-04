import "./projects.css"
import bloApi from '../../assets/images/blogApi.jpg'
import ecommarceApi from '../../assets/images/ecommarceApi.jpg'
import jobapi from '../../assets/images/jobapi.jpg'
import careerportal_swag from '../../assets/images/careerportal_swag.jpg'
import zander_estimate from '../../assets/images/zander_estimate.jpg'
import claimpilot from '../../assets/images/claimpilot.jpg'

import propertySearch from '../../assets/images/aws_digram_project2.png'
import covid19 from '../../assets/images/aws_digram_project1.png'

import stepFunction from '../../assets/images/step_func_cdkflow.jpg'

import emr from '../../assets/images/emr_digram.png'


import ecommarcepipline from '../../assets/images/aws_digram_proj_4_data_warehousing.png'

import architecture from '../../assets/images/architecture1.png'

import project_sample_6 from '../../assets/images/project_sample_6.png'


import project1 from '../../assets/images/project1.png'



import project3 from '../../assets/images/project4.png'


import project4 from '../../assets/images/project3.png'
import culturelancer from '../../assets/images/culturelancer.jpg'

import chatbotui from '../../assets/images/chatbotui.jpg'


const data = [
  {
    id: 0,
    image: chatbotui,
    title: "Advance rag chatbot that allow use to upload and chat any document such as pdf,word, and txt with python javascript and langchain framework,llm and openai",
    github: "https://github.com/owolabi-develop/chat-pdf.git",
    demo: "https://github.com/owolabi-develop/chat-pdf.git"
  },

  {
    id: 1,
    image:  culturelancer,
    title: "Culturelancer is an advance job portal application that stream line job search and employement for both employer and applicant",
    demo: "https://culture-lancer.vercel.app/"
  },
  
    {
      id: 2,
      image:  zander_estimate,
      title: "Zander estimate  an ai powered roof claim insurance processing application",
      github: "https://github.com/ContextData/zander_estimates",
      demo: "https://github.com/ContextData/zander_estimates"
    },

    {
      id: 2,
      image: claimpilot,
      title: "Claimspilot an Ai powered property insurance claim processing application",
      github: "https://claimspilot.contextdata.dev/dashboard/",
      demo: "https://claimspilot.contextdata.dev/dashboard/"
    },


     // {
    //   id: 2,
    //   image:  propertySearch,
    //   title: "Aws real-time property-search-pipline cdk!",
    //   github: "https://github.com/owolabi-develop/aws-real-time-property-search-pipline_cdk.git",
    //   demo: "https://github.com/owolabi-develop/aws-real-time-property-search-pipline_cdk.git"
    // },

    // {
    //   id: 3,
    //   image: covid19,
    //   title: "aws-real-time-covid19-pipline-cdk",
    //   github: "https://github.com/owolabi-develop/aws-real-time-covid19-pipline-cdk.git",
    //   demo: "https://inext.dev"
    // },
    // {
    //   id: 4,
    //   image: stepFunction,
    //   title: "End to End Event Driven Etl Automation pipline cdk!",
    //   github: "https://github.com/owolabi-develop/aws_step_function_cdk_dataengineering_pipline.git",
    //   demo: "https://github.com/owolabi-develop/aws_step_function_cdk_dataengineering_pipline.git"
    // },
    // {
    //   id: 5,
    //   image: emr,
    //   title: "ETL Pipeline on Amazon EMR through AWS CDK!",
    //   github: "https://github.com/owolabi-develop/ETL_Pipeline_on_Amazon_EMR_through_AWS_CDK.git",
    //   demo: "https://github.com/owolabi-develop/ETL_Pipeline_on_Amazon_EMR_through_AWS_CDK.git"
    // },
    // {
    //   id: 6,
    //   image: ecommarcepipline,
    //   title: "Ecommarce kaggle Dataset data warehousing pipline cdk",
    //   github: "https://github.com/owolabi-develop/Ecommarce_kaggle_dataset_datawarehousing_pipline_cdk.git",
    //   demo: "https://github.com/owolabi-develop/Ecommarce_kaggle_dataset_datawarehousing_pipline_cdk.git"
    // },
    // {
    //   id: 7,
    //   image: architecture,
    //   title: "End to end aws kinesis stream firehose and snowflake pip line",
    //   github: "https://github.com/owolabi-develop/blog-api",
    //   demo: "https://inext.dev"
    // },
    // {
    //   id: 8,
    //   image: project_sample_6,
    //   title: "End to end reddit data engineering project",
    //   github: "https://github.com/owolabi-develop/end_to-_end_reddit_dataengineering.git",
    //   demo: "https://github.com/owolabi-develop/end_to-_end_reddit_dataengineering.git"
    // },
    // {
    //   id: 9,
    //   image: project1,
    //   title: "Data engineering project",
    //   github: "https://github.com/owolabi-develop/scrap-articles-analytic-data-engineering.git",
    //   demo: "https://inext.dev"
    // },
    // {
    //   id: 10,
    //   image: project3,
    //   title: "Data Engineering Project With Snowflake and dbt",
    //   github: "https://github.com/owolabi-develop/sale-ecommarce-data-engineering.git",
    //   demo: "https://github.com/owolabi-develop/sale-ecommarce-data-engineering.git"
    // },
    
    {
      id: 12,
      image: bloApi,
      title: "Advance blog Api build with Django rest-framework",
      github: "https://github.com/owolabi-develop/blog-api",
      demo: "https://inext.dev"
    },
    {
      id: 13,
      image: ecommarceApi,
      title: "Advance E-commarce Api build with Django rest-framework",
      github: "https://github.com/owolabi-develop/ecommarce-api",
      demo: "https://inext.dev"
    },
    {
      id: 14,
      image: jobapi,
      title: "Advance Job porter Api build with Django rest-framework",
      github: "https://github.com/owolabi-develop/linkedIn-similar-api",
      demo: "https://inext.dev"
    },

    {
      id: 15,
      image:careerportal_swag ,
      title: "Advance Job porter Api build with FastApi",
      github: "https://career-app-vopqo.ondigitalocean.app/careerportal/api/",
      demo: "https://inext.dev"
    },

   
    
  ];

const Portfolio = ()=>{

    return (
        <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      
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
      
      </section>
    )
    

}

export default Portfolio