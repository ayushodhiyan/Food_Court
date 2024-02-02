import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo"
          alt="weblogo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>HOME</li>
            <li>CART</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;