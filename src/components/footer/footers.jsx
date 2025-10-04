import "./footers.css"

import {
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoYoutube
  } from "react-icons/io";


  const Footer = ()=>{
    return(
        <footer>
        <a href="#" className="footer__logo">
        Expert Python Developer and Generative AI Specialist
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://web.facebook.com/Howo45/" target="_blank">
            <IoLogoFacebook />
          </a>
          <a href="https://www.instagram.com/owolabi_develop/" target="_blank">
            <IoLogoInstagram />
          </a>
          
          <a href="https://www.youtube.com/channel/UCdkW7h_EU-7nUKlpwoweYYg" target="_blank">
            <IoLogoYoutube />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; OwolabiDevelop Company. All rights reserved</small>
        </div>
      </footer>
    )
  }

  export default Footer;