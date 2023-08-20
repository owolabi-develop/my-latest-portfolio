import "./header.css"


const Header = ()=>{

    return (
        <div className="header__container">
            <div className="my_details">
                <p>I am</p>
                <h1>Owolabi Akintan</h1>
                <p>Fullstack Developer</p>
            </div>

            <button className="cv_bnts">Download CV</button>  <button className="talk_btn">Let's Talk</button>
           
        </div>
    )
}

export default Header