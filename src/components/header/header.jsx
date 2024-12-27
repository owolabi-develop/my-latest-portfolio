import "./header.css"
import { Zoom } from "react-awesome-reveal";
import mycv from '../../assets/images/Owolabi_Akintan_cv.pdf'

const Header = ()=>{

    return (
        <Zoom>
        <div className="header__container">
            <div className="my_details">
                <p>I am</p>
                <h1>Owolabi Akintan Maro</h1>
                <p>Fullstack Developer Data Engineer and AI</p>
            </div>
            <a href={mycv} download="Owolabi_Akintan_cv.pdf"> <button className="cv_bnts">Download CV</button></a> <a href="#contact"><button className="talk_btn">Lets Talk</button></a>

            
           
        </div>
        </Zoom>
    )
}

export default Header