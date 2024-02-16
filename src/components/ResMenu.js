import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";




const ResMenu=()=>{
    const{resId}= useParams();
    const resmenu=useResMenu(resId);
   
    if(resmenu===null)return <Shimmer/>;
    
    const {name,cuisines,costForTwoMessage,avgRatingString,sla,
        totalRatingsString,locality,feeDetails,itemAttribute} =
    resmenu?.data?.cards[2]?.card?.card?.info;
    
    const{itemCards}=
    resmenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    

    

    
    return(
        <div className="p-8 pl-28">
            <div className="p-4 border-b border-dashed border-black flex justify-between">
               <div>
               <div className="font-bold text-xl">{name}</div>
               <div className=" text-sm">{cuisines.join(" ,")}</div>
               <div className=" text-sm"></div>
               <div className=" text-sm">{locality}, {sla.lastMileTravelString}</div>
               <div className="p-2">🏍️{sla.lastMileTravelString} | ₹ {feeDetails.fees[0].fee/100} Delivery fee will apply</div>
               </div>
               <div className="p-2 h-[70px] border border-solid-2 border-slate-200 rounded-lg shadow-lg">
               <div className=" text-center border-b border-solid border-black text-green-400">
                ⭐{avgRatingString}
                </div>
               <div>{totalRatingsString}</div>
               
               </div>
               
               
            </div>
            
            <div >
                <div className="p-4  py-8 text-xl font-bold flex border-b border-solid border-black">
                     <div>⏱️{sla.slaString}</div>
                     <div className="pl-16">💸{costForTwoMessage}</div>  
                </div>
                
            <div >
            {itemCards.map((item)=>(
                <div className="py-10 border-b border-solid border-black flex justify-between" key={item.card.info.id}>
                    <div>
                        <div>
                        {((item.card.info.itemAttribute.vegClassifier)==="VEG")?<h1>🟢</h1>:<h1>🔴</h1>}
                            
                        </div>
                        <div className="font-bold text-lg">{item.card.info.name}</div>
                        <div className="flex">
                          <div className="font-bold pr-1">₹{item.card.info.defaultPrice/100||item.card.info.price/100 }</div>
                          <div className=" text-sm px-2 text-red-700 bg-red-200">{item.card.info.offerTags[0].title} {item.card.info.offerTags[0].subTitle}</div>
                        </div>
                        <div>{item.card.info.description}</div>
                    </div>
                    <div className=" px-8 " >
                        <img className=" border border-solid border-black h-[80px] w-[150px] rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.card.info.imageId}/>
                        <button className=" p-4 m-2  bg-slate-200">Add+</button>
                    </div>
                </div>
            ))}
            </div>
            </div>
            
            
        </div>
    );

  }


    


export default ResMenu;