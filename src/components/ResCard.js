import { CDN_URL } from "../utils/constants";

const ResCard=(props)=>{
    const{resdata}=props;
    const{
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla

    }=resdata?.info;
    return(
      <div className="px-2  m-2 h-[350px]  w-[200px] rounded-lg cursor-pointer hover:shadow-2xl hover:shadow-slate-800" >
        <img className="h-[175px] w-[210px] rounded-lg" alt="logo" src={CDN_URL+cloudinaryImageId}/>
        
        <div className="font-bold py-2" ><h3 className="truncate ...">{name}</h3></div>
        <div className="font-bold flex justify-between py-1">
          <h4 >⭐{avgRating}</h4>
          <h4>▪️{sla.slaString}</h4>
          </div>
        <div className=" py-1 "><h4 >{costForTwo}</h4></div>
        <div className=" py-1 " ><h4 className="truncate ...">{cuisines.join(" ,")}</h4></div>
        
      </div>
    );
  };


export const withlabel=(ResCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white px-2 text-sm">Promoted</label>
        <ResCard {...props} />
      </div>
    )
  }
}

  export default ResCard;