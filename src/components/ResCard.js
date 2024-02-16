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
      <div className=" p-2 m-2 h-[425px]  w-[200px] bg-slate-200 rounded-lg cursor-pointer hover:shadow-2xl hover:shadow-slate-800" >
        <img className="h-[175px] w-[210px] rounded-lg" alt="logo" src={CDN_URL+cloudinaryImageId}/>
        
        <h3 className="font-bold py-2" >{name}</h3>
        <h4 className=" py-1" >{avgRating}</h4>
        <h4 className=" py-1" >{costForTwo}</h4>
        <h4 className=" py-1" >{cuisines.join(" ,")}</h4>
        
      </div>
    );
  };
  export default ResCard;