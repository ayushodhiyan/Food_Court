import { CDN_URL } from "../utils/constants";

const ResCard=(props)=>{
    const{resdata}=props;
    const{
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId

    }=resdata?.info;
    return(
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className='res-logo' alt="logo" src={CDN_URL+cloudinaryImageId}/>
        
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{cuisines.join(" ,")}</h4>
        
      </div>
    );
  };
  export default ResCard;