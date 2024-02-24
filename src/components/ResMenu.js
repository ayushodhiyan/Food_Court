import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import MenuCatogories from "./MenuCatogories";




const ResMenu=()=>{
    const{resId}= useParams();
    const resmenu=useResMenu(resId);
   
    if(resmenu===null)return <Shimmer/>;
    
    const {name,cuisines,costForTwoMessage,avgRatingString,sla,
        totalRatingsString,locality,feeDetails} =
    resmenu?.data?.cards[2]?.card?.card?.info;
    
    

    const catogories=resmenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cato)=>
        cato.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

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
                
            
            </div>
            <div >
            {catogories.map((cat)=>(
                <MenuCatogories key={cat.card.card.title} items={cat.card.card}/>
            ))}
            </div>
            
            
        </div>
    );

  }
export default ResMenu;