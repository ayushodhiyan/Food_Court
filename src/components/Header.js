import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
      <div className="flex justify-between bg-slate-200 shadow-lg mb-2">
        <div className="logo-container">
          <img className="w-24"
          alt="weblogo" src={LOGO_URL}/>
        </div>
        <div className="flex item-centre" >
          <ul className="flex p-4 m-4">
            <li className="px-4 font-bold text-lg "><Link to="/">HOME</Link></li>
            <li className="px-4 font-bold text-lg  "><Link to="/about">ABOUT US</Link></li>
            <li className="px-4  font-bold text-lg "><Link to="/contact">CONTACT US</Link></li>
            <li className="px-4  font-bold text-lg "><Link to="/cart">CART</Link></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;