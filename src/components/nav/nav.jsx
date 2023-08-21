import "./nav.css"
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = ()=>{
    const [state,setState] = useState({active:"#"})
    return (
        <nav>
        <a
          onClick={() => setState({ active: "#" })}
          className={state.active == "#" ? "active" : ""}
          href="#"
        >
          <AiOutlineHome />
        </a>
        <a
          onClick={() => setState({ active: "#about" })}
          className={state.active == "#about" ? "active" : ""}
          href="#about"
        >
          <AiOutlineUser />
        </a>
        <a
          onClick={() => setState({ active: "#experience" })}
          className={state.active == "#experience" ? "active" : ""}
          href="#experience"
        >
          <BiBook />
        </a>
        <a
          onClick={() =>setState({ active: "#services" })}
          className={state.active == "#services" ? "active" : ""}
          href="#services"
        >
          <RiServiceLine />
        </a>
        <a
          onClick={() => setState({ active: "#contact" })}
          className={state.active == "#contact" ? "active" : ""}
          href="#contact"
        >
          <BiMessageSquareDetail />
        </a>
      </nav>

    )
}
export default Nav