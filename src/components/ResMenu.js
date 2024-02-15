import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";



const ResMenu=()=>{
    
    const{resId}= useParams();
    const resmenu=useResMenu(resId);
   
    if(resmenu===null)return <Shimmer/>;
    
    const {name,cuisines,costForTwoMessage,avgRating} =
    resmenu?.data?.cards[2]?.card?.card?.info;
    
    const{itemCards}=
    resmenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    return(
        <div>
            
            <h2>{name}</h2>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{costForTwoMessage}</h4>
            <h4>Rating--{avgRating}</h4>
            <div>
                <h3>===MENU===</h3>
            <ul>
            {itemCards.map((item)=>(
                <li key={item.card.info.id}
                    >{item.card.info.name}--Rs {item.card.info.defaultPrice/100||item.card.info.price/100 }</li>
            ))}
            </ul>
            </div>
            
            
        </div>
    );

  }


    


export default ResMenu;