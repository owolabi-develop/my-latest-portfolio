import "./social.css"
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
const SocialLinks =()=>{
    return(
        <div className="social_links">
            <a href="https://www.linkedin.com/in/owolabi-akintan-73645a230" target="_blank">
          <BsLinkedin className="social_icon" />
        </a>
        <a href="https://github.com/owolabi-develop" target="_blank">
          <FaGithub className="social_icon" />
        </a>
        </div>
    )
}


export default SocialLinks

