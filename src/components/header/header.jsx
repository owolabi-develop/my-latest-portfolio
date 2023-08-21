import "./header.css"
import { Zoom } from "react-awesome-reveal";

const Header = ()=>{

    return (
        <Zoom>
        <div className="header__container">
            <div className="my_details">
                <p>I am</p>
                <h1>Owolabi Akintan</h1>
                <p>Fullstack Developer</p>
            </div>
            <button className="cv_bnts">Download CV</button>  <a href="#contact"><button className="talk_btn">Let's Talk</button></a>

            
           
        </div>
        </Zoom>
    )
}

export default Header