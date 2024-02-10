import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo"
          alt="weblogo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
            <li><Link to="/cart">CART</Link></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;